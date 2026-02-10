import { Droplets, Wind, Car, CloudSun } from "lucide-react";
import { motion } from "framer-motion";

type IndexLevel = "good" | "moderate" | "poor";

interface SafetyIndex {
  label: string;
  icon: typeof Droplets;
  value: string;
  level: IndexLevel;
}

const levelStyles: Record<IndexLevel, string> = {
  good: "text-safe bg-safe-muted",
  moderate: "text-warning bg-warning-muted",
  poor: "text-critical bg-critical-muted",
};

const indices: SafetyIndex[] = [
  { label: "Air Quality", icon: Wind, value: "Good", level: "good" },
  { label: "Water Safety", icon: Droplets, value: "Moderate", level: "moderate" },
  { label: "Traffic", icon: Car, value: "Clear", level: "good" },
  { label: "Weather", icon: CloudSun, value: "Warm", level: "good" },
];

const SafetyIndices = () => (
  <div className="grid grid-cols-2 gap-3">
    {indices.map((item, i) => (
      <motion.div
        key={item.label}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: i * 0.05 }}
        className="glass-card rounded-xl p-4 flex flex-col gap-2"
      >
        <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${levelStyles[item.level]}`}>
          <item.icon className="w-4 h-4" />
        </div>
        <p className="text-xs text-muted-foreground font-medium">{item.label}</p>
        <p className="text-sm font-semibold font-heading text-foreground">{item.value}</p>
      </motion.div>
    ))}
  </div>
);

export default SafetyIndices;
