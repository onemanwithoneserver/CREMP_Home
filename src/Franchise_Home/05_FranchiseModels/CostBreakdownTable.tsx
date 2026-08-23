import { type CostBreakdownItem } from "./data";
export const CostBreakdownTable = ({
  data,
  totalValue,
}: {
  data: CostBreakdownItem[];
  totalValue: string;
}) => {
  return (
    <div className="w-full flex flex-col gap-3 pt-2 border-none h-full bg-transparent">
      <div className="grid grid-cols-12 text-[11px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest pb-4 border-b border-gray-200 dark:border-gray-800">
        <div className="col-span-6 pl-1">Category</div>
        <div className="col-span-3 text-center">%</div>
        <div className="col-span-3 text-right pr-2">Amount</div>
      </div>
      <div className="flex flex-col gap-4 mt-2 flex-1 overflow-y-auto scrollbar-hide">
        {data.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="grid grid-cols-12 items-center hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-[4px] p-1.5 transition-colors group cursor-pointer"
            >
              <div className="col-span-6 flex items-center gap-2">
                <div
                  className="w-9 h-9 rounded-[4px] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-sm"
                  style={{
                    backgroundColor: `${item.color}15`,
                    color: item.color,
                  }}
                >
                  <Icon size={16} strokeWidth={2.5} />
                </div>
                <span
                  className="text-[12px] font-semibold text-[#0a1128] dark:text-gray-200 truncate group-hover:whitespace-normal group-hover:overflow-visible pr-2 group-hover:text-[#d4af37] transition-colors"
                  title={item.label}
                >
                  {item.label}
                </span>
              </div>
              <div className="col-span-3 flex justify-center">
                <span className="text-[11px] font-semibold text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-[2px]">
                  {item.percentage}%
                </span>
              </div>
              <div className="col-span-3 text-right pr-2">
                <span className="text-[15px] font-semibold text-[#d4af37] drop-shadow-sm">
                  {item.amount}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-12 items-center pt-3 pb-2 border-t border-gray-200 dark:border-gray-800">
        <div className="col-span-7 flex items-center justify-end pr-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
            Total Avg
          </span>
        </div>
        <div className="col-span-5 text-right flex flex-col justify-center pr-2">
          <span className="text-xl font-bold text-[#0a1128] dark:text-white leading-none tracking-tight">
            {totalValue}
          </span>
        </div>
      </div>
    </div>
  );
};
