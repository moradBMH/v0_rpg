import { motion } from "framer-motion";
import { MapPin, Star } from "lucide-react";

const QuestTracker = () => {
  const progress = 65;

  return (
    <motion.div
      initial={{ x: -30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="glass-panel neon-border rounded-2xl p-4 space-y-3"
    >
      {/* Quest title */}
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-xl bg-secondary/20 border border-secondary/40 flex items-center justify-center shrink-0 float-up">
          <Star size={18} className="text-secondary" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[10px] uppercase tracking-[0.2em] text-secondary font-semibold">Quête active</p>
          <h3 className="font-display text-sm font-bold tracking-wide text-foreground leading-tight">
            Le Sentier des Lumières
          </h3>
        </div>
        <span className="font-display text-xs font-bold neon-text-gold">+120 XP</span>
      </div>

      {/* Objective */}
      <div className="flex items-center gap-2 text-sm">
        <MapPin size={14} className="text-primary shrink-0" />
        <span className="text-muted-foreground">
          Rejoindre le <span className="text-foreground font-semibold">checkpoint 3/5</span>
        </span>
        <span className="ml-auto text-xs text-primary font-display font-bold">340m</span>
      </div>

      {/* Progress bar */}
      <div className="relative h-2 rounded-full bg-muted overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{
            background: "linear-gradient(90deg, hsl(var(--neon-purple)), hsl(var(--primary)))",
            boxShadow: "0 0 12px hsl(var(--primary) / 0.5)",
          }}
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
        />
        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: "linear-gradient(90deg, transparent 0%, hsla(0,0%,100%,0.2) 50%, transparent 100%)",
            backgroundSize: "200% 100%",
            animation: "shimmer 2s linear infinite",
          }}
        />
      </div>

      {/* Checkpoints */}
      <div className="flex justify-between px-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <div
              className={`w-3 h-3 rounded-full border-2 ${
                i <= 2
                  ? "bg-primary border-primary glow-pulse"
                  : i === 3
                  ? "border-primary/60 bg-transparent"
                  : "border-muted-foreground/30 bg-transparent"
              }`}
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default QuestTracker;
