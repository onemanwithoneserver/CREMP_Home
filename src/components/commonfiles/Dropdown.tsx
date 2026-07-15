import { forwardRef, type SelectHTMLAttributes } from 'react'

export interface DropdownOption {
  value: string
  label: string
  disabled?: boolean
}

export interface DropdownProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size' | 'onChange'> {
  id?: string
  options: DropdownOption[]
  value: string
  onChange: (value: string) => void
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeClasses = {
  sm: 'px-2.5 py-1 text-xs',
  md: 'px-3 py-1.5 text-xs',
  lg: 'px-3.5 py-2 text-sm',
}

const Dropdown = forwardRef<HTMLSelectElement, DropdownProps>(
  ({ id, options, value, onChange, size = 'md', className = '', disabled = false, ...props }, ref) => {
    return (
      <select
        id={id}
        ref={ref}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        className={`
          ${sizeClasses[size]}
          bg-white border border-cremp-border rounded font-semibold text-cremp-text-primary 
          shadow-elevation-1 transition-base cursor-pointer
          hover:bg-cremp-surface-alt 
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cremp-primary focus-visible:border-cremp-primary/40
          disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white
          ${className}
        `}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} disabled={opt.disabled}>
            {opt.label}
          </option>
        ))}
      </select>
    )
  }
)

Dropdown.displayName = 'Dropdown'

export default Dropdown