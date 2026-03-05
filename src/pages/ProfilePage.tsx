import { motion } from "framer-motion";
import { Trophy, Flame, MapPin, Clock, Zap, Share2, TrendingUp, Award } from "lucide-react";
import BottomTabBar from "@/components/game/BottomTabBar";

const stats = [
  { icon: MapPin, label: "Distance", value: "12.4 km", color: "text-primary" },
  { icon: Clock, label: "Durée totale", value: "3h 25m", color: "text-primary" },
  { icon: TrendingUp, label: "Rythme moy.", value: "5'32\"/km", color: "text-primary" },
  { icon: Flame, label: "Série", value: "7 jours", color: "text-health-green" },
];

const badges = [
  { emoji: "🏅", label: "Explorateur", unlocked: true },
  { emoji: "🌙", label: "Nocturne", unlocked: true },
  { emoji: "🏃", label: "Sprinter", unlocked: true },
  { emoji: "🏛️", label: "Arcade", unlocked: false },
  { emoji: "🔮", label: "Mystère", unlocked: false },
  { emoji: "🤝", label: "Social", unlocked: false },
];

const rewards = [
  { icon: "⚡", label: "Points XP", value: "680", sub: "Niveau 4" },
  { icon: "🌱", label: "Impact Éco", value: "+32", sub: "Contribution" },
  { icon: "🏆", label: "Quêtes", value: "5/12", sub: "Complétées" },
];

const ProfilePage = () => (
  <div className="relative w-full max-w-md mx-auto h-screen overflow-y-auto bg-background pb-20">
    {/* Header gradient */}
    <div className="absolute top-0 left-0 right-0 h-44 z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/15 via-background/50 to-background" />
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--secondary) / 0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--secondary) / 0.4) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
    </div>

    <div className="relative z-10 px-5 pt-8 space-y-6">
      {/* Avatar + name */}
      <motion.div
        className="flex items-center gap-4"
        initial={{ y: -15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="w-16 h-16 rounded-2xl bg-primary/10 border-2 border-primary/40 flex items-center justify-center glow-pulse">
          <span className="text-3xl">🧑‍🚀</span>
        </div>
        <div>
          <h1 className="font-display text-lg font-bold text-foreground tracking-wide">Joueur_42</h1>
          <p className="text-xs text-muted-foreground font-body">Niveau 4 · Explorateur</p>
        </div>
      </motion.div>

      {/* Reward cards */}
      <motion.div
        className="grid grid-cols-3 gap-2"
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        {rewards.map((r, i) => (
          <motion.div
            key={i}
            className="glass-panel neon-border rounded-xl p-3 flex flex-col items-center gap-1 text-center"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.15 + i * 0.07, type: "spring", stiffness: 300, damping: 20 }}
          >
            <span className="text-xl">{r.icon}</span>
            <span className="font-display text-sm font-bold neon-text">{r.value}</span>
            <span className="text-[9px] text-muted-foreground font-body">{r.sub}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Stats */}
      <motion.div
        className="space-y-2"
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="font-display text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">
          Statistiques
        </h2>
        <div className="grid grid-cols-2 gap-2">
          {stats.map((s, i) => (
            <div key={i} className="glass-panel rounded-xl p-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <s.icon size={16} className={s.color} />
              </div>
              <div>
                <p className="font-display text-sm font-bold text-foreground">{s.value}</p>
                <p className="text-[10px] text-muted-foreground font-body">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Map trace placeholder */}
      <motion.div
        className="space-y-2"
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.25 }}
      >
        <h2 className="font-display text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">
          Dernière sortie
        </h2>
        <div className="glass-panel neon-border rounded-2xl overflow-hidden">
          <div className="relative h-36 bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
            {/* Simulated trace */}
            <svg viewBox="0 0 200 100" className="w-4/5 h-auto">
              <motion.path
                d="M 10 80 C 30 20, 60 60, 90 30 S 150 70, 190 20"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="3"
                strokeLinecap="round"
                filter="drop-shadow(0 0 6px hsl(170 100% 50% / 0.5))"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <motion.circle
                r="4"
                fill="hsl(var(--primary))"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
              >
                <animateMotion
                  dur="3s"
                  repeatCount="indefinite"
                  path="M 10 80 C 30 20, 60 60, 90 30 S 150 70, 190 20"
                />
              </motion.circle>
            </svg>
            <div className="absolute bottom-2 right-3 flex items-center gap-1.5 text-[10px] text-muted-foreground font-body">
              <MapPin size={10} className="text-primary" /> 2.3 km · 18 min
            </div>
          </div>
        </div>
      </motion.div>

      {/* Badges */}
      <motion.div
        className="space-y-3"
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="font-display text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">
          Badges
        </h2>
        <div className="grid grid-cols-3 gap-2">
          {badges.map((b, i) => (
            <motion.div
              key={i}
              className={`rounded-xl p-3 flex flex-col items-center gap-1.5 text-center border ${
                b.unlocked
                  ? "glass-panel neon-border"
                  : "bg-muted/30 border-border"
              }`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: b.unlocked ? 1 : 0.45 }}
              transition={{ delay: 0.35 + i * 0.05, type: "spring", stiffness: 300, damping: 20 }}
            >
              <span className={`text-2xl ${!b.unlocked ? "grayscale" : ""}`}>{b.emoji}</span>
              <span className="font-display text-[10px] font-bold text-foreground">{b.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Impact collectif */}
      <motion.div
        className="space-y-2"
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="font-display text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">
          Impact collectif
        </h2>
        <div className="glass-panel rounded-xl p-4 flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-health-green/10 border border-health-green/30 flex items-center justify-center">
            <span className="text-xl">🌍</span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-body text-foreground">Ta communauté a parcouru</p>
            <p className="font-display text-base font-bold neon-text">1 247 km</p>
          </div>
        </div>
      </motion.div>

      {/* Share — secondary */}
      <motion.div
        className="flex justify-center pt-2 pb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors">
          <Share2 size={14} />
          <span className="font-display text-xs font-bold tracking-wider">Partager mes stats</span>
        </button>
      </motion.div>
    </div>

    {/* Scanlines */}
    <div
      className="fixed inset-0 z-[60] pointer-events-none opacity-[0.02]"
      style={{
        backgroundImage:
          "repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(var(--primary) / 0.1) 2px, hsl(var(--primary) / 0.1) 4px)",
      }}
    />

    <BottomTabBar />
  </div>
);

export default ProfilePage;
