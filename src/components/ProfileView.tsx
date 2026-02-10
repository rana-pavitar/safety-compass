import { Bell, Settings, User, Globe, Volume2, Languages } from "lucide-react";
import { motion } from "framer-motion";

const ProfileView = () => (
  <div className="space-y-4">
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card rounded-xl p-5 flex items-center gap-4"
    >
      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
        <User className="w-7 h-7 text-primary" />
      </div>
      <div>
        <p className="font-heading font-bold text-foreground">Community Member</p>
        <p className="text-sm text-muted-foreground">Sector 18, Gurugram</p>
        <p className="text-xs text-primary font-medium mt-0.5">12 reports submitted</p>
      </div>
    </motion.div>

    <div className="space-y-2">
      {[
        { icon: Globe, label: "Location Preferences", desc: "Set your monitored areas" },
        { icon: Volume2, label: "Alert Sensitivity", desc: "Info, Warning, or Critical only" },
        { icon: Languages, label: "Language", desc: "English" },
        { icon: Bell, label: "Notifications", desc: "Push, SMS, Email" },
        { icon: Settings, label: "Accessibility", desc: "Text size, contrast, offline mode" },
      ].map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
          className="glass-card rounded-xl p-4 flex items-center gap-3 cursor-pointer hover:shadow-md transition-shadow"
        >
          <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center">
            <item.icon className="w-4 h-4 text-primary" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-foreground">{item.label}</p>
            <p className="text-xs text-muted-foreground">{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default ProfileView;
