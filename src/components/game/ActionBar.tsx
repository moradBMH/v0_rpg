import { motion } from "framer-motion";
import { Pause, Camera, ChevronUp } from "lucide-react";

const ActionBar = () => (
  <motion.div
    initial={{ y: 40, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.6, duration: 0.5 }}
    className="flex items-center justify-center gap-5"
  >
    {/* Camera */}
    <button className="w-12 h-12 rounded-full glass-panel border border-border flex items-center justify-center hover:border-primary/50 transition-colors">
      <Camera size={20} className="text-muted-foreground" />
    </button>

    {/* Pause button */}
    <button className="relative w-16 h-16 rounded-full bg-primary flex items-center justify-center glow-pulse group">
      <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" style={{ animationDuration: "2s" }} />
      <Pause size={26} className="text-primary-foreground relative z-10 group-hover:scale-110 transition-transform" />
    </button>

    {/* Expand details */}
    <button className="w-12 h-12 rounded-full glass-panel border border-border flex items-center justify-center hover:border-primary/50 transition-colors">
      <ChevronUp size={20} className="text-muted-foreground" />
    </button>
  </motion.div>
);

export default ActionBar;
