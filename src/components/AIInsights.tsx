import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface Insight {
  id: string;
  text: string;
  confidence: string;
}

const mockInsights: Insight[] = [
  {
    id: "1",
    text: "MG Road area has seen a 40% increase in waterlogging reports over the last 3 days. Heavy rain is forecasted tomorrow.",
    confidence: "Based on 12 community reports and weather data",
  },
  {
    id: "2",
    text: "Air quality in your area is expected to worsen this evening due to industrial activity and low wind speed.",
    confidence: "Based on CPCB monitoring stations and weather models",
  },
];

const AIInsights = () => (
  <div className="space-y-3">
    <div className="flex items-center gap-2">
      <Sparkles className="w-4 h-4 text-primary" />
      <h3 className="font-heading font-semibold text-foreground">AI Insights</h3>
    </div>
    {mockInsights.map((insight, i) => (
      <motion.div
        key={insight.id}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: i * 0.1 }}
        className="glass-card rounded-xl p-4 border-l-4 border-l-primary/40"
      >
        <p className="text-sm text-foreground leading-relaxed">{insight.text}</p>
        <p className="text-[10px] text-muted-foreground mt-2 italic">🔍 {insight.confidence}</p>
        <p className="text-[10px] text-muted-foreground/60 mt-1">AI assists analysis — humans verify all alerts</p>
      </motion.div>
    ))}
  </div>
);

export default AIInsights;
