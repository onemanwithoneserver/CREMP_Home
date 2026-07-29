import {
  useState,
  useRef,
  useEffect,
  forwardRef,
  type HTMLAttributes,
} from "react";
import { ChevronDown, Check } from "lucide-react";

export interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface DropdownProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "onChange"
> {
  id?: string;
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
}

const sizeClasses = {
  sm: "px-2.5 py-1 text-xs",
  md: "px-3 py-1.5 text-xs",
  lg: "px-3.5 py-2 text-sm",
};

const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  (
    {
      id,
      options,
      value,
      onChange,
      size = "md",
      className = "",
      disabled = false,
      ...props
    },
    ref,
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const selectedOption = options.find((o) => o.value === value);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };

      if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside);
      }
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [isOpen]);

    return (
      <div
        className={`relative inline-block ${className}`}
        ref={(node) => {
          (
            containerRef as React.MutableRefObject<HTMLDivElement | null>
          ).current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        }}
        {...props}
      >
        <button
          type="button"
          id={id}
          disabled={disabled}
          onClick={() => setIsOpen(!isOpen)}
          className={`
            w-full flex items-center justify-between gap-2
            ${sizeClasses[size]}
            bg-cremp-surface border border-cremp-border rounded font-semibold text-cremp-text-primary 
            shadow-elevation-1 transition-all cursor-pointer
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cremp-primary focus-visible:border-cremp-primary/40
            disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-cremp-surface
          `}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          <span className="truncate">
            {selectedOption?.label || "Select..."}
          </span>
          <ChevronDown
            size={14}
            className={`transition-transform duration-200 shrink-0 ${isOpen ? "rotate-180 text-cremp-primary" : "text-cremp-text-muted"}`}
          />
        </button>

        {isOpen && (
          <ul
            className="absolute z-[100] w-full min-w-max mt-1 py-1 bg-cremp-surface border border-cremp-border rounded shadow-elevation-3 overflow-hidden animate-fade-in-down"
            role="listbox"
          >
            {options.map((opt) => {
              const isSelected = opt.value === value;
              return (
                <li
                  key={opt.value}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => {
                    if (!opt.disabled) {
                      onChange(opt.value);
                      setIsOpen(false);
                    }
                  }}
                  className={`
                    flex items-center justify-between px-3 py-2 text-xs font-semibold cursor-pointer transition-colors
                    ${opt.disabled ? "opacity-50 cursor-not-allowed" : ""}
                    ${isSelected ? "text-cremp-accent bg-cremp-accent/10" : "text-cremp-text-primary hover:bg-cremp-surface-alt"}
                  `}
                >
                  <span className="truncate pr-4">{opt.label}</span>
                  {isSelected && <Check size={12} className="shrink-0" />}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  },
);

Dropdown.displayName = "Dropdown";

export default Dropdown;
