import { Check, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import {
  forwardRef,
  useEffect,
  useRef,
  useState,
  useId,
  type HTMLAttributes,
} from "react";
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
  sm: "px-2.5 py-1.5 text-xs",
  md: "px-3 py-2 text-sm",
  lg: "px-4 py-2.5 text-base",
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
    const internalId = useId();
    const dropdownId = id || internalId;
    const selectedOption = options.find((o) => o.value === value);
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent | TouchEvent) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };
      const handleCloseOthers = (e: Event) => {
        const customEvent = e as CustomEvent;
        if (customEvent.detail.id !== dropdownId) {
          setIsOpen(false);
        }
      };
      if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside, {
          passive: true,
        });
        window.addEventListener("cremp-dropdown-open", handleCloseOthers);
      }
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("touchstart", handleClickOutside);
        window.removeEventListener("cremp-dropdown-open", handleCloseOthers);
      };
    }, [isOpen, dropdownId]);
    const toggleOpen = (e: React.MouseEvent | React.TouchEvent) => {
      if (disabled) return;
      e.stopPropagation();
      const nextState = !isOpen;
      setIsOpen(nextState);
      if (nextState) {
        window.dispatchEvent(
          new CustomEvent("cremp-dropdown-open", {
            detail: { id: dropdownId },
          }),
        );
      }
    };
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
          id={dropdownId}
          disabled={disabled}
          onClick={toggleOpen}
          className={`
            w-full flex items-center justify-between gap-2
            ${sizeClasses[size]}
            bg-white/80 dark:bg-cremp-surface/80 backdrop-blur-md
            border border-cremp-border rounded-lg font-semibold text-cremp-text-primary
            shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cremp-primary/50 focus-visible:border-cremp-primary
            disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-sm
            ${isOpen ? "border-cremp-primary/50 shadow-md ring-1 ring-cremp-primary/20" : "hover:border-cremp-text-muted/30"}
          `}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          <span className="truncate">
            {selectedOption?.label || "Select..."}
          </span>
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180 text-cremp-primary" : "text-cremp-text-muted"}`}
          />
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              key="dropdown-menu"
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute z-[99999] w-full min-w-max mt-2 py-1.5 bg-white/95 dark:bg-cremp-surface/95 backdrop-blur-xl backdrop-saturate-150 border border-white/20 dark:border-white/10 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] overflow-hidden"
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
                      flex items-center justify-between px-3 py-2.5 mx-1.5 rounded-lg text-sm font-medium cursor-pointer transition-all duration-200
                      ${opt.disabled ? "opacity-50 cursor-not-allowed" : ""}
                      ${
                        isSelected
                          ? "text-cremp-primary bg-cremp-primary/10 font-semibold"
                          : "text-cremp-text-secondary hover:text-cremp-text-primary hover:bg-cremp-surface-alt dark:hover:bg-cremp-surface-alt/50"
                      }
                    `}
                  >
                    <span className="truncate pr-6">{opt.label}</span>
                    {isSelected && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 25,
                        }}
                      >
                        <Check
                          size={16}
                          className="shrink-0 text-cremp-primary"
                        />
                      </motion.div>
                    )}
                  </li>
                );
              })}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    );
  },
);
Dropdown.displayName = "Dropdown";
export default Dropdown;
