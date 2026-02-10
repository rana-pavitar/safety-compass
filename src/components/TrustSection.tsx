import { Shield, Lock, Eye, Award } from "lucide-react";
import { motion } from "framer-motion";

const TrustSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 6 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="glass-card rounded-xl p-5 space-y-4"
  >
    <h3 className="font-heading font-semibold text-foreground">Trust & Transparency</h3>

    <div className="space-y-3">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
          <Shield className="w-4 h-4 text-primary" />
        </div>
        <div>
          <p className="text-sm font-medium text-foreground">Your reports make a difference</p>
          <p className="text-xs text-muted-foreground">Community data helps authorities respond faster.</p>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
          <Lock className="w-4 h-4 text-primary" />
        </div>
        <div>
          <p className="text-sm font-medium text-foreground">Your data is private</p>
          <p className="text-xs text-muted-foreground">Location is anonymized. Reports are never linked to identity.</p>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
          <Eye className="w-4 h-4 text-primary" />
        </div>
        <div>
          <p className="text-sm font-medium text-foreground">AI assists, humans verify</p>
          <p className="text-xs text-muted-foreground">All AI-generated insights are reviewed before alerts are issued.</p>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
          <Award className="w-4 h-4 text-primary" />
        </div>
        <div>
          <p className="text-sm font-medium text-foreground">Aligned with NDMA & CPCB standards</p>
          <p className="text-xs text-muted-foreground">Data sources follow national safety guidelines.</p>
        </div>
      </div>
    </div>
  </motion.div>
);

export default TrustSection;
