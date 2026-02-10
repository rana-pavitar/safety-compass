import { useState } from "react";
import { Camera, MapPin, X, Send, Droplets, Wind, Construction, Flame, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const issueTypes = [
  { id: "waterlogging", label: "Water Logging", icon: Droplets },
  { id: "pollution", label: "Pollution", icon: Wind },
  { id: "road-damage", label: "Road Damage", icon: Construction },
  { id: "fire", label: "Fire / Smoke", icon: Flame },
  { id: "crowd", label: "Unsafe Crowd", icon: Users },
];

interface ReportIssueSheetProps {
  open: boolean;
  onClose: () => void;
}

const ReportIssueSheet = ({ open, onClose }: ReportIssueSheetProps) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSelected(null);
      setDescription("");
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 bg-card rounded-t-2xl shadow-xl z-50 max-h-[85vh] overflow-y-auto"
          >
            <div className="p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading font-bold text-lg text-foreground">Report an Issue</h3>
                <button onClick={onClose} className="p-1 rounded-full hover:bg-muted">
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 rounded-full bg-safe-muted flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">✓</span>
                  </div>
                  <p className="font-heading font-bold text-foreground">Report Submitted</p>
                  <p className="text-sm text-muted-foreground mt-1">Thank you for helping keep your community safe!</p>
                </motion.div>
              ) : (
                <>
                  <p className="text-sm text-muted-foreground mb-4">What issue are you seeing?</p>
                  <div className="grid grid-cols-3 gap-2 mb-5">
                    {issueTypes.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setSelected(type.id)}
                        className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border transition-all text-center ${
                          selected === type.id
                            ? "border-primary bg-accent shadow-sm"
                            : "border-border bg-card hover:bg-muted/50"
                        }`}
                      >
                        <type.icon className={`w-5 h-5 ${selected === type.id ? "text-primary" : "text-muted-foreground"}`} />
                        <span className={`text-[11px] font-medium leading-tight ${selected === type.id ? "text-primary" : "text-muted-foreground"}`}>
                          {type.label}
                        </span>
                      </button>
                    ))}
                  </div>

                  <textarea
                    placeholder="Describe what you see (optional)"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full p-3 rounded-xl border border-border bg-muted/30 text-sm text-foreground placeholder:text-muted-foreground resize-none h-20 focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />

                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" size="sm" className="gap-1.5">
                      <Camera className="w-3.5 h-3.5" />
                      Photo
                    </Button>
                    <Button variant="outline" size="sm" className="gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      Auto-detected
                    </Button>
                  </div>

                  <Button
                    onClick={handleSubmit}
                    disabled={!selected}
                    className="w-full mt-5 gap-2"
                    size="lg"
                  >
                    <Send className="w-4 h-4" />
                    Submit Report
                  </Button>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ReportIssueSheet;
