import { Home, MapPin, Plus, Bell, User } from "lucide-react";
import { motion } from "framer-motion";

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  onReport: () => void;
}

const tabs = [
  { id: "home", label: "Home", icon: Home },
  { id: "hotspots", label: "Hotspots", icon: MapPin },
  { id: "report", label: "Report", icon: Plus, isAction: true },
  { id: "alerts", label: "Alerts", icon: Bell },
  { id: "profile", label: "Profile", icon: User },
];

const BottomNav = ({ activeTab, onTabChange, onReport }: BottomNavProps) => (
  <nav className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-md border-t border-border z-30">
    <div className="max-w-lg mx-auto flex items-center justify-around py-2 px-2">
      {tabs.map((tab) => {
        if (tab.isAction) {
          return (
            <button
              key={tab.id}
              onClick={onReport}
              className="flex flex-col items-center -mt-5"
            >
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                <Plus className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-[10px] font-medium text-primary mt-1">{tab.label}</span>
            </button>
          );
        }

        const isActive = activeTab === tab.id;
        const Icon = tab.icon;

        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className="flex flex-col items-center gap-0.5 py-1 px-3 relative"
          >
            <Icon className={`w-5 h-5 transition-colors ${isActive ? "text-primary" : "text-muted-foreground"}`} />
            <span className={`text-[10px] font-medium transition-colors ${isActive ? "text-primary" : "text-muted-foreground"}`}>
              {tab.label}
            </span>
            {isActive && (
              <motion.div
                layoutId="activeTab"
                className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-full bg-primary"
              />
            )}
          </button>
        );
      })}
    </div>
  </nav>
);

export default BottomNav;
