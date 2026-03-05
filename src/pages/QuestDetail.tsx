import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Navigation, Clock, Zap, ChevronRight, Lock, Shield } from "lucide-react";
import { QUESTS } from "@/data/quests";

const difficultyColor: Record<string, string> = {
  Facile: "text-health-green border-health-green/30 bg-health-green/10",
  Moyen: "text-accent border-accent/30 bg-accent/10",
  Difficile: "text-destructive border-destructive/30 bg-destructive/10",
};

const QuestDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const quest = QUESTS.find((q) => q.id === id);

  if (!quest) {
    return (
      <div className="h-screen flex items-center justify-center bg-background text-foreground">
        Quête introuvable
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-md mx-auto h-screen overflow-y-auto bg-background">
      {/* Header gradient */}
      <div className="absolute top-0 left-0 right-0 h-56 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-background/60 to-background" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--primary) / 0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.4) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Back button */}
      <motion.button
        onClick={() => navigate(-1)}
        className="relative z-10 flex items-center gap-2 px-4 pt-6 pb-2 text-muted-foreground"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowLeft size={18} />
        <span className="font-body text-sm">Retour</span>
      </motion.button>

      <div className="relative z-10 px-5 pb-32 space-y-6">
        {/* Quest type + difficulty */}
        <motion.div
          className="flex items-center gap-2"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.05 }}
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-secondary font-display font-semibold">
            {quest.type === "explore" && "Exploration"}
            {quest.type === "run" && "Course"}
            {quest.type === "challenge" && "Défi"}
            {quest.type === "social" && "Social"}
          </span>
          <span className={`text-[10px] uppercase tracking-widest font-display font-bold px-2 py-0.5 rounded-full border ${difficultyColor[quest.difficulty]}`}>
            {quest.difficulty}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="font-display text-xl font-bold tracking-wide text-foreground leading-tight"
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          {quest.title}
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-sm text-muted-foreground leading-relaxed font-body"
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15 }}
        >
          {quest.description}
        </motion.p>

        {/* Stats row */}
        <motion.div
          className="flex items-center gap-3"
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {[
            { icon: <Navigation size={14} className="text-primary" />, value: quest.distance },
            { icon: <Clock size={14} className="text-primary" />, value: quest.duration },
            { icon: <Zap size={14} className="text-accent" />, value: `+${quest.xp} pts` },
          ].map((stat, i) => (
            <div
              key={i}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl glass-panel"
            >
              {stat.icon}
              <span className="font-display text-xs font-bold text-foreground">{stat.value}</span>
            </div>
          ))}
        </motion.div>

        {/* Steps */}
        <motion.div
          className="space-y-3"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.25 }}
        >
          <h2 className="font-display text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">
            Parcours
          </h2>
          <div className="relative pl-6 space-y-0">
            {/* Vertical line */}
            <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" />

            {quest.steps.map((step, i) => (
              <motion.div
                key={i}
                className="relative flex items-start gap-3 py-2.5"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.07 }}
              >
                {/* Node */}
                <div className="absolute -left-6 top-3 flex items-center justify-center">
                  <div className="w-[22px] h-[22px] rounded-full border-2 border-primary/50 bg-background flex items-center justify-center">
                    <span className="font-display text-[9px] font-bold text-primary">{i + 1}</span>
                  </div>
                </div>

                <span className="font-body text-sm text-foreground/90 pt-0.5">{step.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Rewards */}
        <motion.div
          className="space-y-3"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="font-display text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">
            Récompenses
          </h2>
          <div className="grid grid-cols-3 gap-2">
            {quest.rewards.map((reward, i) => (
              <motion.div
                key={i}
                className="glass-panel neon-border rounded-xl p-3 flex flex-col items-center gap-1.5 text-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.45 + i * 0.08, type: "spring", stiffness: 300, damping: 20 }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-2xl">{reward.icon}</span>
                <span className="font-display text-[10px] font-bold text-foreground leading-tight">
                  {reward.type === "points" ? reward.value : reward.label}
                </span>
                {reward.type === "points" && (
                  <span className="text-[9px] text-muted-foreground font-body">XP</span>
                )}
                {reward.type === "impact" && (
                  <span className="font-display text-[10px] font-bold neon-text">{reward.value}</span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Fixed bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 max-w-md mx-auto">
        <div className="px-5 pb-6 pt-4 bg-gradient-to-t from-background via-background/95 to-transparent">
          {quest.locked ? (
            <div className="flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-muted border border-border">
              <Lock size={16} className="text-muted-foreground" />
              <span className="font-display text-sm font-bold text-muted-foreground tracking-wider">Verrouillée</span>
            </div>
          ) : (
            <motion.button
              onClick={() => navigate("/session")}
              className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-2xl bg-primary text-primary-foreground font-display text-sm font-bold tracking-widest glow-pulse hover:brightness-110 transition-all"
              whileTap={{ scale: 0.97 }}
            >
              Démarrer la quête
              <ChevronRight size={18} />
            </motion.button>
          )}
        </div>
      </div>

      {/* Scanlines */}
      <div
        className="fixed inset-0 z-[60] pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(var(--primary) / 0.1) 2px, hsl(var(--primary) / 0.1) 4px)",
        }}
      />
    </div>
  );
};

export default QuestDetail;
