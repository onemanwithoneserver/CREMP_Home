import { Download, BookOpen } from "lucide-react";

export const bottomActionsData = {
  actions: [
    {
      id: "download-brochure",
      label: "Download Brochure",
      icon: Download,
      variant: "primary" as const,
    },
    {
      id: "editions",
      label: "Editions",
      icon: BookOpen,
      variant: "outline" as const,
    },
  ],
};
