import { LayoutGrid } from "lucide-react";
import { spaceOverviewData } from "./data";
import { Container } from "../../components/layout";

export default function SpaceOverview() {
    return (
        <div className="w-full py-2 bg-transparent relative z-10">
            <Container>
                <div className="w-full bg-white dark:bg-[#11224d] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] border border-gray-100 dark:border-white/10 overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center gap-2 p-4 border-b border-gray-100 dark:border-white/5">
                        <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center text-white shrink-0">
                            <LayoutGrid size={16} fill="currentColor" />
                        </div>
                        <h2 className="text-[1.05rem] font-medium text-gray-800 dark:text-gray-100">{spaceOverviewData.title}</h2>
                    </div>

                    {/* Content */}
                    <div className="p-4 flex flex-col gap-5">
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                            {spaceOverviewData.tags.map((tag, idx) => (
                                <span 
                                    key={idx} 
                                    className={`px-3 py-1.5 text-[0.7rem] font-medium rounded-full border ${tag.color}`}
                                >
                                    {tag.text}
                                </span>
                            ))}
                        </div>

                        {/* List */}
                        <div className="flex flex-col gap-0 border-t border-gray-100 dark:border-white/10 pt-2">
                            {spaceOverviewData.details.map((detail, idx) => (
                                <div key={idx} className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-white/5 last:border-0">
                                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                                        <detail.icon size={14} />
                                        <span className="text-[0.85rem] font-medium">{detail.label}</span>
                                    </div>
                                    <span className="text-[0.85rem] font-medium text-gray-800 dark:text-gray-200">{detail.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
