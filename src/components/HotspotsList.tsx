import { MapPin, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

type RiskLevel = "low" | "medium" | "high";

interface Hotspot {
  id: string;
  name: string;
  type: string;
  distance: string;
  level: RiskLevel;
  lastUpdated: string;
}

const levelStyles: Record<RiskLevel, { dot: string; bg: string; label: string }> = {
  low: { dot: "bg-safe", bg: "bg-safe-muted", label: "Low Risk" },
  medium: { dot: "bg-warning", bg: "bg-warning-muted", label: "Medium Risk" },
  high: { dot: "bg-critical", bg: "bg-critical-muted", label: "High Risk" },
};

const mockHotspots: Hotspot[] = [
  { id: "1", name: "MG Road Junction", type: "Waterlogging", distance: "500m", level: "high", lastUpdated: "5 min ago" },
  { id: "2", name: "Industrial Area Phase 2", type: "Air Pollution", distance: "2.1 km", level: "high", lastUpdated: "15 min ago" },
  { id: "3", name: "Sector 22 Market", type: "Crowding", distance: "800m", level: "medium", lastUpdated: "30 min ago" },
  { id: "4", name: "Railway Underpass", type: "Accident-prone", distance: "1.5 km", level: "medium", lastUpdated: "1 hr ago" },
  { id: "5", name: "City Park Area", type: "Normal", distance: "350m", level: "low", lastUpdated: "2 hrs ago" },
];

const HotspotsList = () => (
  <div className="space-y-3">
    <div className="flex items-center justify-between">
      <h3 className="font-heading font-semibold text-foreground">Nearby Hotspots</h3>
      <button className="text-xs text-primary font-medium hover:underline">Map View</button>
    </div>
    {mockHotspots.map((spot, i) => {
      const style = levelStyles[spot.level];
      return (
        <motion.div
          key={spot.id}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: i * 0.05 }}
          className="glass-card rounded-xl p-4 flex items-center gap-3 cursor-pointer hover:shadow-md transition-shadow"
        >
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${style.bg}`}>
            <MapPin className={`w-4 h-4 ${spot.level === 'low' ? 'text-safe' : spot.level === 'medium' ? 'text-warning' : 'text-critical'}`} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-foreground truncate">{spot.name}</p>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-xs text-muted-foreground">{spot.type}</span>
              <span className="text-xs text-muted-foreground">•</span>
              <span className="text-xs text-muted-foreground">{spot.distance} away</span>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${style.bg}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
              {style.label}
            </span>
            <span className="text-[10px] text-muted-foreground">{spot.lastUpdated}</span>
          </div>
        </motion.div>
      );
    })}
  </div>
);

export default HotspotsList;
