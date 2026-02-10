import { AlertTriangle, Info, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

type Severity = "info" | "warning" | "critical";

interface Alert {
  id: string;
  title: string;
  description: string;
  severity: Severity;
  time: string;
  distance?: string;
}

const severityConfig: Record<Severity, { icon: typeof Info; badge: string; badgeBg: string; border: string }> = {
  info: {
    icon: Info,
    badge: "Info",
    badgeBg: "status-info-muted",
    border: "border-l-info",
  },
  warning: {
    icon: AlertTriangle,
    badge: "Warning",
    badgeBg: "status-warning-muted",
    border: "border-l-warning",
  },
  critical: {
    icon: ShieldAlert,
    badge: "Critical",
    badgeBg: "status-critical-muted",
    border: "border-l-critical",
  },
};

const mockAlerts: Alert[] = [
  {
    id: "1",
    title: "Water logging reported on MG Road",
    description: "Avoid the stretch near Central Mall. Alternate route via Ring Road is clear.",
    severity: "warning",
    time: "12 min ago",
    distance: "1.2 km",
  },
  {
    id: "2",
    title: "Air quality declining in Industrial Zone",
    description: "AQI has crossed 200. Wear a mask if you're outdoors.",
    severity: "critical",
    time: "28 min ago",
    distance: "3.5 km",
  },
  {
    id: "3",
    title: "Road maintenance on NH-48",
    description: "One lane closed until 6 PM. Expect minor delays.",
    severity: "info",
    time: "1 hr ago",
    distance: "5 km",
  },
];

const AlertsList = () => (
  <div className="space-y-3">
    <div className="flex items-center justify-between">
      <h3 className="font-heading font-semibold text-foreground">Active Alerts</h3>
      <button className="text-xs text-primary font-medium hover:underline">View All</button>
    </div>
    {mockAlerts.map((alert, i) => {
      const cfg = severityConfig[alert.severity];
      const Icon = cfg.icon;
      return (
        <motion.div
          key={alert.id}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: i * 0.08 }}
          className={`glass-card rounded-xl p-4 border-l-4 ${cfg.border} cursor-pointer hover:shadow-md transition-shadow`}
        >
          <div className="flex items-start gap-3">
            <div className={`p-1.5 rounded-md ${cfg.badgeBg} mt-0.5`}>
              <Icon className="w-3.5 h-3.5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ${cfg.badgeBg}`}>
                  {cfg.badge}
                </span>
                <span className="text-[10px] text-muted-foreground">{alert.time}</span>
                {alert.distance && (
                  <span className="text-[10px] text-muted-foreground">• {alert.distance}</span>
                )}
              </div>
              <p className="text-sm font-semibold text-foreground leading-tight">{alert.title}</p>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{alert.description}</p>
            </div>
          </div>
        </motion.div>
      );
    })}
  </div>
);

export default AlertsList;
