
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
      className={`px-3 py-1.5 bg-white border border-[#eef0f3] rounded-[8px] text-[0.82rem] font-semibold text-[#1A1A2E] shadow-sm hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B21A8] focus-visible:border-[#6B21A8] transition-all duration-200 cursor-pointer ${className}`}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  )
}
