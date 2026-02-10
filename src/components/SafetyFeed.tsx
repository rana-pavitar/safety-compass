import { ShieldCheck, Megaphone, BookOpen, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

interface FeedItem {
  id: string;
  icon: typeof ShieldCheck;
  title: string;
  text: string;
  time: string;
  type: "advisory" | "tip" | "incident" | "awareness";
}

const typeStyles: Record<string, string> = {
  advisory: "bg-warning-muted text-warning",
  tip: "bg-safe-muted text-safe",
  incident: "bg-critical-muted text-critical",
  awareness: "bg-info-muted text-info",
};

const mockFeed: FeedItem[] = [
  {
    id: "1",
    icon: AlertTriangle,
    title: "Heavy rain expected tomorrow",
    text: "Avoid low-lying areas. Keep emergency supplies ready.",
    time: "30 min ago",
    type: "advisory",
  },
  {
    id: "2",
    icon: ShieldCheck,
    title: "Emergency preparedness tip",
    text: "Store important documents in waterproof bags during monsoon season.",
    time: "2 hrs ago",
    type: "tip",
  },
  {
    id: "3",
    icon: Megaphone,
    title: "Minor accident on Bypass Road",
    text: "No injuries reported. Traffic diverted via Sector 15.",
    time: "4 hrs ago",
    type: "incident",
  },
  {
    id: "4",
    icon: BookOpen,
    title: "Know your evacuation routes",
    text: "Familiarize yourself with nearest shelters and safe zones in your area.",
    time: "1 day ago",
    type: "awareness",
  },
];

const SafetyFeed = () => (
  <div className="space-y-3">
    <h3 className="font-heading font-semibold text-foreground">Safety Feed</h3>
    {mockFeed.map((item, i) => {
      const Icon = item.icon;
      return (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: i * 0.06 }}
          className="glass-card rounded-xl p-4 flex gap-3 cursor-pointer hover:shadow-md transition-shadow"
        >
          <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${typeStyles[item.type]}`}>
            <Icon className="w-4 h-4" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-foreground leading-tight">{item.title}</p>
            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{item.text}</p>
            <p className="text-[10px] text-muted-foreground/60 mt-1.5">{item.time}</p>
          </div>
        </motion.div>
      );
    })}
  </div>
);

export default SafetyFeed;
