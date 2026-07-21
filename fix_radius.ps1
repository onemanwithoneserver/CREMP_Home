$folderPath = "C:\Users\mlmma\OneDrive\Documents\GitHub\CREMP_Home\src\Investors"
$files = Get-ChildItem -Path $folderPath -Recurse -File -Include *.tsx

foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw

    # Remove inline comments {/* ... */}
    # Using regex with single-line option (?s) so . matches newlines too, though comments are mostly inline.
    $content = [regex]::Replace($content, '(?s)\{/\*.*?\*/\}', '')
    $content = [regex]::Replace($content, '(?s)<!--.*?-->', '')

    # Replace large border radii with rounded-[8px]
    $content = $content -replace 'rounded-xl', 'rounded-[8px]'
    $content = $content -replace 'rounded-2xl', 'rounded-[8px]'
    $content = $content -replace 'rounded-3xl', 'rounded-[8px]'
    $content = $content -replace 'rounded-\[2rem\]', 'rounded-[8px]'
    $content = $content -replace 'rounded-\[1\.5rem\]', 'rounded-[8px]'
    $content = $content -replace 'rounded-\[1rem\]', 'rounded-[8px]'
    $content = $content -replace 'rounded-\[32px\]', 'rounded-[8px]'
    $content = $content -replace 'rounded-\[24px\]', 'rounded-[8px]'
    $content = $content -replace 'rounded-\[20px\]', 'rounded-[8px]'
    $content = $content -replace 'rounded-\[16px\]', 'rounded-[8px]'
    $content = $content -replace 'rounded-lg', 'rounded-[8px]'

    # Replace rounded-full on elements that are likely buttons or pills (containing px- or py-)
    # Match className="... rounded-full ... px- ..."
    # We will do a simple text replace for the exact button classes if possible, or just a regex on className string.
    # Actually, a regex that matches `className="[^"]*"` and replaces `rounded-full` with `rounded-[8px]` IF it doesn't have `w-` and `h-` of equal size, or IF it has `px-`.
    # Let's do it in C# inline or just use regex replacements for common patterns:
    
    # Pattern 1: rounded-full followed by px-
    $content = [regex]::Replace($content, 'rounded-full([^"]*?px-\d)', 'rounded-[8px]$1')
    # Pattern 2: px- followed by rounded-full
    $content = [regex]::Replace($content, '(px-\d[^"]*?)rounded-full', '$1rounded-[8px]')
    
    # Also py-
    $content = [regex]::Replace($content, 'rounded-full([^"]*?py-\d)', 'rounded-[8px]$1')
    $content = [regex]::Replace($content, '(py-\d[^"]*?)rounded-full', '$1rounded-[8px]')

    if ((Get-Content -Path $file.FullName -Raw) -ne $content) {
        Set-Content -Path $file.FullName -Value $content -NoNewline
        Write-Host "Updated $($file.Name)"
    }
}
