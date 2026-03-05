import { motion } from "framer-motion";
import { Trophy, Shield, Zap } from "lucide-react";

const XPBar = () => {
  const level = 12;
  const xpProgress = 72;

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.4 }}
      className="flex items-center gap-3"
    >
      {/* Level badge */}
      <div className="relative">
        <div className="w-11 h-11 rounded-xl bg-accent/10 border-2 border-accent/50 flex items-center justify-center glow-pulse"
          style={{ boxShadow: "0 0 12px hsl(var(--xp-gold) / 0.3)" }}
        >
          <span className="font-display text-sm font-black text-accent">{level}</span>
        </div>
        <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-secondary flex items-center justify-center">
          <Zap size={10} className="text-secondary-foreground" />
        </div>
      </div>

      {/* XP bar */}
      <div className="flex-1 space-y-1">
        <div className="flex justify-between items-center">
          <span className="font-display text-[10px] tracking-[0.15em] font-bold text-accent uppercase">
            Niveau {level}
          </span>
          <span className="font-display text-[10px] tracking-wider text-muted-foreground">
            {xpProgress}% → Niv.{level + 1}
          </span>
        </div>
        <div className="relative h-1.5 rounded-full bg-muted overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full"
            style={{
              background: "linear-gradient(90deg, hsl(var(--xp-gold)), hsl(var(--accent)))",
              boxShadow: "0 0 8px hsl(var(--xp-gold) / 0.5)",
            }}
            initial={{ width: "0%" }}
            animate={{ width: `${xpProgress}%` }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Streak & achievements */}
      <div className="flex gap-1.5">
        <div className="w-9 h-9 rounded-lg bg-health-green/10 border border-health-green/30 flex items-center justify-center">
          <Trophy size={14} className="text-health-green" />
        </div>
        <div className="w-9 h-9 rounded-lg bg-energy-blue/10 border border-energy-blue/30 flex items-center justify-center">
          <Shield size={14} className="text-energy-blue" />
        </div>
      </div>
    </motion.div>
  );
};

export default XPBar;
