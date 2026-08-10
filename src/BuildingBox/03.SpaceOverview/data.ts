import { LayoutGrid, Grid3X3, Star } from "lucide-react";

export const spaceOverviewData = {
    title: "Space Overview",
    tags: [
        { text: "WARM SHELL", color: "bg-[#fce5cd]/80 text-amber-900 border-[#fce5cd] dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-900/50" },
        { text: "GLASS FACADE", color: "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-900/50" },
        { text: "COLUMN FREE", color: "bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-900/50" },
        { text: "BRANDING SPACE", color: "bg-indigo-100 text-indigo-700 border-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-400 dark:border-indigo-900/50" },
        { text: "FALSE CEILING", color: "bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-800/50 dark:text-gray-300 dark:border-gray-700" },
        { text: "STORAGE", color: "bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-800/50 dark:text-gray-300 dark:border-gray-700" },
        { text: "EXTERNAL BRANDING", color: "bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-900/50" },
    ],
    details: [
        { label: "Partition Type", value: "Glass", icon: LayoutGrid },
        { label: "No. of Partitions", value: "2", icon: Grid3X3 },
        { label: "External Branding", value: "Available Outside", icon: Star }
    ]
};
