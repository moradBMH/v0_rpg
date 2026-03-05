import { motion } from "framer-motion";
import { useState } from "react";
import { Lock, Users, Trophy, TrendingUp } from "lucide-react";
import BottomTabBar from "@/components/game/BottomTabBar";

type Tab = "rues" | "quartiers" | "badges";

const streets = [
  { name: "Rue du Marché", pct: 100, unlocked: true },
  { name: "Avenue des Lumières", pct: 72, unlocked: true },
  { name: "Passage des Arcades", pct: 45, unlocked: true },
  { name: "Ruelle du Phare", pct: 0, unlocked: true },
  { name: "Impasse Secrète", pct: 0, unlocked: false },
];

const quartiers = [
  { name: "Centre-Ville", pct: 68, streets: 12, explored: 8, unlocked: true },
  { name: "Vieux Port", pct: 35, streets: 8, explored: 3, unlocked: true },
  { name: "Parc Nord", pct: 0, streets: 6, explored: 0, unlocked: false },
  { name: "Zone Industrielle", pct: 0, streets: 10, explored: 0, unlocked: false },
];

const collectionBadges = [
  { emoji: "🗺️", label: "Cartographe", desc: "Explorer 10 rues", unlocked: true },
  { emoji: "🏘️", label: "Habitant", desc: "Compléter 1 quartier", unlocked: false },
  { emoji: "🌟", label: "Complétiste", desc: "100% d'une zone", unlocked: false },
];

const friends = [
  { name: "Alex_Runner", emoji: "🏃", km: 8.2, goal: 15 },
  { name: "Marie_Explore", emoji: "🧭", km: 12.1, goal: 15 },
  { name: "Lucas_42", emoji: "⚡", km: 5.0, goal: 15 },
];

const CommunityPage = () => {
  const [tab, setTab] = useState<Tab>("rues");

  return (
    <div className="relative w-full max-w-md mx-auto h-screen overflow-y-auto bg-background pb-20">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 h-36 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-background/50 to-background" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--accent) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent) / 0.3) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative z-10 px-5 pt-8 space-y-6">
        {/* Title */}
        <motion.div initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
          <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-display font-semibold">
            Collection
          </p>
          <h1 className="font-display text-lg font-bold text-foreground tracking-wide">
            Rues & Quartiers
          </h1>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="flex gap-1 p-1 rounded-xl glass-panel"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.05 }}
        >
          {(["rues", "quartiers", "badges"] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 py-2 rounded-lg font-display text-xs font-bold tracking-wider transition-all ${
                tab === t
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t === "rues" ? "Rues" : t === "quartiers" ? "Quartiers" : "Badges"}
            </button>
          ))}
        </motion.div>

        {/* Tab content */}
        <motion.div
          key={tab}
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="space-y-2"
        >
          {tab === "rues" &&
            streets.map((s, i) => (
              <div
                key={i}
                className={`glass-panel rounded-xl p-3 flex items-center gap-3 ${!s.unlocked ? "opacity-50" : ""}`}
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  {s.unlocked ? (
                    <span className="font-display text-[10px] font-bold text-primary">{s.pct}%</span>
                  ) : (
                    <Lock size={12} className="text-muted-foreground" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground truncate">{s.name}</p>
                  <div className="mt-1 h-1.5 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60"
                      initial={{ width: 0 }}
                      animate={{ width: `${s.pct}%` }}
                      transition={{ delay: 0.2 + i * 0.05, duration: 0.6 }}
                    />
                  </div>
                </div>
              </div>
            ))}

          {tab === "quartiers" &&
            quartiers.map((q, i) => (
              <div
                key={i}
                className={`glass-panel neon-border rounded-xl p-4 space-y-2 ${!q.unlocked ? "opacity-40" : ""}`}
              >
                <div className="flex items-center justify-between">
                  <p className="font-display text-sm font-bold text-foreground">{q.name}</p>
                  {q.unlocked ? (
                    <span className="font-display text-xs font-bold neon-text">{q.pct}%</span>
                  ) : (
                    <Lock size={14} className="text-muted-foreground" />
                  )}
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-primary via-secondary/60 to-primary/40"
                    initial={{ width: 0 }}
                    animate={{ width: `${q.pct}%` }}
                    transition={{ delay: 0.2 + i * 0.08, duration: 0.8 }}
                  />
                </div>
                <p className="text-[10px] text-muted-foreground font-body">
                  {q.explored}/{q.streets} rues explorées
                </p>
              </div>
            ))}

          {tab === "badges" && (
            <div className="grid grid-cols-3 gap-2">
              {collectionBadges.map((b, i) => (
                <motion.div
                  key={i}
                  className={`rounded-xl p-3 flex flex-col items-center gap-1.5 text-center border ${
                    b.unlocked ? "glass-panel neon-border" : "bg-muted/30 border-border"
                  }`}
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: b.unlocked ? 1 : 0.45 }}
                  transition={{ delay: 0.1 + i * 0.06, type: "spring", stiffness: 300, damping: 20 }}
                >
                  <span className={`text-2xl ${!b.unlocked ? "grayscale" : ""}`}>{b.emoji}</span>
                  <span className="font-display text-[10px] font-bold text-foreground">{b.label}</span>
                  <span className="text-[9px] text-muted-foreground font-body leading-tight">{b.desc}</span>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Weekly challenge */}
        <motion.div
          className="space-y-2"
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="font-display text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">
            Défi de la semaine
          </h2>
          <div className="glass-panel neon-border rounded-2xl p-4 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center">
                <Trophy size={20} className="text-accent" />
              </div>
              <div className="flex-1">
                <p className="font-display text-sm font-bold text-foreground">50 km collectifs</p>
                <p className="text-[11px] text-muted-foreground font-body">Toute la communauté ensemble</p>
              </div>
            </div>
            {/* Collective bar */}
            <div className="space-y-1">
              <div className="flex justify-between text-[10px] font-display font-bold">
                <span className="text-muted-foreground">Progression</span>
                <span className="neon-text-gold">37.2 / 50 km</span>
              </div>
              <div className="h-3 rounded-full bg-muted overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))",
                    boxShadow: "0 0 12px hsl(var(--primary) / 0.4)",
                  }}
                  initial={{ width: 0 }}
                  animate={{ width: "74%" }}
                  transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
                />
              </div>
            </div>
            {/* Personal contribution */}
            <div className="flex items-center gap-2 text-[11px] font-body text-muted-foreground">
              <TrendingUp size={12} className="text-primary" />
              <span>
                Ta contribution : <span className="font-display font-bold text-foreground">4.8 km</span>
              </span>
            </div>
          </div>
        </motion.div>

        {/* Friends */}
        <motion.div
          className="space-y-3 pb-4"
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-2">
            <h2 className="font-display text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">
              Amis
            </h2>
            <Users size={12} className="text-muted-foreground" />
          </div>
          {friends.map((f, i) => (
            <motion.div
              key={i}
              className="glass-panel rounded-xl p-3 flex items-center gap-3"
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.45 + i * 0.06 }}
            >
              <div className="w-9 h-9 rounded-full bg-secondary/10 border border-secondary/30 flex items-center justify-center shrink-0">
                <span className="text-lg">{f.emoji}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground truncate">{f.name}</p>
                <div className="mt-1 h-1.5 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-secondary/80 to-secondary/40"
                    initial={{ width: 0 }}
                    animate={{ width: `${(f.km / f.goal) * 100}%` }}
                    transition={{ delay: 0.5 + i * 0.06, duration: 0.6 }}
                  />
                </div>
              </div>
              <span className="font-display text-xs font-bold text-foreground shrink-0">{f.km} km</span>
            </motion.div>
          ))}
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
};

export default CommunityPage;
