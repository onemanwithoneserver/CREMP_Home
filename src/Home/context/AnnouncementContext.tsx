import { createContext, useContext, useState, type ReactNode } from "react";

interface AnnouncementContextValue {
  showSticky: boolean;
  setShowSticky: (value: boolean) => void;
}

const AnnouncementContext = createContext<AnnouncementContextValue>({
  showSticky: false,
  setShowSticky: () => {},
});

export function AnnouncementProvider({ children }: { children: ReactNode }) {
  const [showSticky, setShowSticky] = useState(false);
  return (
    <AnnouncementContext.Provider value={{ showSticky, setShowSticky }}>
      {children}
    </AnnouncementContext.Provider>
  );
}

export function useAnnouncement() {
  return useContext(AnnouncementContext);
}
