import { Activity } from "lucide-react";
import { infrastructureData } from "./data";
import { Container } from "../../components/layout";

export default function Infrastructure() {
    return (
        <div className="w-full py-2 bg-transparent relative z-10">
            <Container>
                <div className="w-full bg-white dark:bg-[#11224d] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] border border-gray-100 dark:border-white/10 overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center gap-2 p-4 border-b border-gray-100 dark:border-white/5">
                        <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center text-white shrink-0">
                            <Activity size={16} />
                        </div>
                        <h2 className="text-[1.05rem] font-medium text-gray-800 dark:text-gray-100">{infrastructureData.title}</h2>
                    </div>

                    {/* List */}
                    <div className="flex flex-col gap-0 px-4">
                        {infrastructureData.items.map((item, idx) => (
                            <div key={idx} className="flex items-center justify-between py-3.5 border-b border-gray-100 dark:border-white/5 last:border-0">
                                <div className="flex items-center gap-3">
                                    <div className={`w-8 h-8 rounded-full ${item.iconBg} flex items-center justify-center text-white shrink-0 shadow-sm`}>
                                        <item.icon size={14} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[0.85rem] font-medium text-gray-800 dark:text-gray-200">{item.label}</span>
                                        <span className="text-[0.7rem] text-gray-400">{item.sub}</span>
                                    </div>
                                </div>
                                <span className={`text-[0.7rem] font-bold tracking-wide uppercase ${item.statusColor}`}>
                                    {item.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
}
