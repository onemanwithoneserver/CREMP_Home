import { type CostBreakdownItem } from './data';

export const CostBreakdownTable = ({ data, totalValue }: { data: CostBreakdownItem[], totalValue: string }) => {
    return (
        <div className="w-full flex flex-col gap-2 p-2 rounded-2xl border-none h-full">
            <div className="grid grid-cols-12 text-xs font-bold text-gray-500 uppercase tracking-wider pb-3 border-b border-gray-100 dark:border-gray-800">
                <div className="col-span-5">Category</div>
                <div className="col-span-3 text-center">%</div>
                <div className="col-span-4 text-right">Amount</div>
            </div>
            <div className="flex flex-col gap-4 mt-3 flex-1 overflow-y-auto pr-1 scrollbar-hide">
                {data.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                        <div key={idx} className="grid grid-cols-12 items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800/50 p-1.5 -mx-1.5 rounded-lg transition-colors">
                            <div className="col-span-5 flex items-center gap-2.5">
                                <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 shadow-sm" style={{ backgroundColor: `${item.color}15`, color: item.color }}>
                                    <Icon size={14} />
                                </div>
                                <span className="text-sm font-bold text-[#0b1b42] dark:text-gray-200 truncate" title={item.label}>{item.label}</span>
                            </div>
                            <div className="col-span-3 flex justify-center">
                                <span className="text-xs font-bold text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded shadow-inner">{item.percentage}%</span>
                            </div>
                            <div className="col-span-4 text-right">
                                <span className="text-[13px] font-black text-[#d4af37]">{item.amount}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="grid grid-cols-12 items-center mt-3 pt-4 border-t border-gray-100 dark:border-gray-800">
                <div className="col-span-7 flex items-center justify-end">
                    <span className="text-xs font-black uppercase tracking-widest text-gray-400">Total Avg</span>
                </div>
                <div className="col-span-5 text-right flex flex-col">
                    <span className="text-xl font-black text-[#0b1b42] dark:text-white leading-none">{totalValue}</span>
                </div>
            </div>
        </div>
    );
};
