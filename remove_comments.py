import os
import sys

def strip_comments(code: str, ext: str) -> str:
    out = []
    i = 0
    n = len(code)
    
    # States: NORMAL, SINGLE_QUOTE, DOUBLE_QUOTE, TEMPLATE_LITERAL, LINE_COMMENT, BLOCK_COMMENT
    state = "NORMAL"
    
    while i < n:
        char = code[i]
        next_char = code[i + 1] if i + 1 < n else ""
        prev_char = code[i - 1] if i > 0 else ""
        prev_prev_char = code[i - 2] if i > 1 else ""
        
        is_escaped = (prev_char == "\\" and prev_prev_char != "\\")
        
        if state == "NORMAL":
            # JSX comment check: {/* ... */}
            if ext in [".tsx", ".jsx"] and char == "{" and next_char == "/" and i + 2 < n and code[i + 2] == "*":
                end_idx = code.find("*/}", i + 3)
                if end_idx != -1:
                    i = end_idx + 3
                    continue
            
            if char == "/" and next_char == "/":
                state = "LINE_COMMENT"
                i += 2
                continue
            elif char == "/" and next_char == "*":
                state = "BLOCK_COMMENT"
                i += 2
                continue
            elif char == "'":
                state = "SINGLE_QUOTE"
                out.append(char)
                i += 1
                continue
            elif char == '"':
                state = "DOUBLE_QUOTE"
                out.append(char)
                i += 1
                continue
            elif char == "`" and ext != ".css":
                state = "TEMPLATE_LITERAL"
                out.append(char)
                i += 1
                continue
            else:
                out.append(char)
                i += 1
                continue
                
        elif state == "SINGLE_QUOTE":
            out.append(char)
            if char == "'" and not is_escaped:
                state = "NORMAL"
            i += 1
            continue
            
        elif state == "DOUBLE_QUOTE":
            out.append(char)
            if char == '"' and not is_escaped:
                state = "NORMAL"
            i += 1
            continue
            
        elif state == "TEMPLATE_LITERAL":
            out.append(char)
            if char == "`" and not is_escaped:
                state = "NORMAL"
            i += 1
            continue
            
        elif state == "LINE_COMMENT":
            if char == "\n":
                out.append("\n")
                state = "NORMAL"
            i += 1
            continue
            
        elif state == "BLOCK_COMMENT":
            if char == "*" and next_char == "/":
                state = "NORMAL"
                i += 2
                continue
            elif char == "\n":
                out.append("\n")
            i += 1
            continue

    raw_result = "".join(out)
    
    # Clean up empty lines without altering indentation structure
    lines = raw_result.split("\n")
    cleaned_lines = []
    prev_empty = False
    for line in lines:
        if line.strip() == "":
            if not prev_empty:
                cleaned_lines.append("")
                prev_empty = True
        else:
            cleaned_lines.append(line.rstrip())
            prev_empty = False
            
    return "\n".join(cleaned_lines)

def process_src_directory(src_path: str):
    supported_exts = {".ts", ".tsx", ".js", ".jsx", ".css"}
    modified = 0
    scanned = 0
    
    for root, _, files in os.walk(src_path):
        for file in files:
            ext = os.path.splitext(file)[1].lower()
            if ext in supported_exts:
                scanned += 1
                full_path = os.path.join(root, file)
                try:
                    with open(full_path, "r", encoding="utf-8") as f:
                        original = f.read()
                    
                    cleaned = strip_comments(original, ext)
                    
                    if cleaned != original:
                        with open(full_path, "w", encoding="utf-8") as f:
                            f.write(cleaned)
                        modified += 1
                        print(f"Cleaned: {file}")
                except Exception as err:
                    print(f"Error processing {full_path}: {err}")
                    
    print(f"\nFinished: {scanned} files scanned, {modified} files cleaned.")

if __name__ == "__main__":
    src_dir = sys.argv[1] if len(sys.argv) > 1 else os.path.join(os.path.dirname(__file__), "src")
    print(f"Removing comments in: {src_dir}")
    process_src_directory(src_dir)
