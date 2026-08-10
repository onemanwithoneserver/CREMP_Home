import { Box, Armchair, Monitor, Coffee } from "lucide-react";

export const fitOutData = {
    title: "Fit-out & Furniture",
    subtitle: "4 Workstations · 8 Chairs · 2 Partitions",
    included: ["AC", "Fridge", "Water Dispenser", "Internet Modem"],
    items: [
        { label: "Storage / Cupboards", icon: Box, active: true },
        { label: "Sofa / Lounge", icon: Armchair, active: true },
        { label: "Reception Desk", icon: Monitor, active: true },
        { label: "Pantry Equipment", icon: Coffee, active: true }
    ]
};
