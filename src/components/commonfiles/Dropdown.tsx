
interface DropdownProps {
  id?: string
  options: { value: string; label: string }[]
  value: string
  onChange: (value: string) => void
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function Dropdown({
  id,
  options,
  value,
  onChange,
  className = '',
}: DropdownProps) {
  return (
    <select
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`px-3 py-1.5 bg-white border border-cremp-border rounded text-xs font-semibold text-cremp-text-primary shadow-elevation-1 hover:bg-cremp-surface-alt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cremp-primary focus-visible:border-cremp-primary/40 transition-base cursor-pointer ${className}`}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  )
}
