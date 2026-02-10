import { Shield, ShieldCheck, ShieldAlert, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

type SafetyLevel = "safe" | "moderate" | "elevated" | "critical";

interface SafetyStatusProps {
  level: SafetyLevel;
  location: string;
  summary: string;
}

const config: Record<SafetyLevel, { icon: typeof Shield; label: string; className: string; bgClass: string }> = {
  safe: {
    icon: ShieldCheck,
    label: "All Clear",
    className: "text-safe",
    bgClass: "bg-safe-muted border-safe/20",
  },
  moderate: {
    icon: Shield,
    label: "Moderate",
    className: "text-info",
    bgClass: "bg-info-muted border-info/20",
  },
  elevated: {
    icon: AlertTriangle,
    label: "Elevated",
    className: "text-warning",
    bgClass: "bg-warning-muted border-warning/20",
  },
  critical: {
    icon: ShieldAlert,
    label: "Critical",
    className: "text-critical",
    bgClass: "bg-critical-muted border-critical/20",
  },
};

const SafetyStatusCard = ({ level, location, summary }: SafetyStatusProps) => {
  const { icon: Icon, label, className, bgClass } = config[level];

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`rounded-xl border p-5 ${bgClass}`}
    >
      <div className="flex items-center gap-3 mb-2">
        <div className={`p-2 rounded-lg bg-card shadow-sm ${className}`}>
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Safety Status Today</p>
          <h2 className={`text-xl font-heading font-bold ${className}`}>{label}</h2>
        </div>
      </div>
      <p className="text-sm text-muted-foreground mt-1">{location}</p>
      <p className="text-sm text-foreground/80 mt-1">{summary}</p>
    </motion.div>
  );
};

export default SafetyStatusCard;
