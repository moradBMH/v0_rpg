import { motion, AnimatePresence } from "framer-motion";
import { X, Navigation, Clock, Star, ChevronRight } from "lucide-react";
import type { Quest } from "@/data/quests";
import { useNavigate } from "react-router-dom";

interface QuestCardProps {
  quest: Quest | null;
  onClose: () => void;
}

const QuestCard = ({ quest, onClose }: QuestCardProps) => {
  const navigate = useNavigate();

  return (
    <AnimatePresence>
      {quest && (
        <motion.div
          className="absolute bottom-28 left-4 right-4 z-40"
          initial={{ y: 60, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 60, opacity: 0, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
        >
          <div className="glass-panel neon-border rounded-2xl p-4 space-y-3">
            {/* Close */}
            <button onClick={onClose} className="absolute top-3 right-3 w-7 h-7 rounded-full bg-muted/60 flex items-center justify-center">
              <X size={14} className="text-muted-foreground" />
            </button>

            {/* Title */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-secondary font-semibold">Quête disponible</p>
              <h3 className="font-display text-base font-bold tracking-wide text-foreground pr-6">{quest.title}</h3>
            </div>

            {/* Meta */}
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <Navigation size={13} className="text-primary" />
                <span>{quest.distance}</span>
              </div>
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <Clock size={13} className="text-primary" />
                <span>{quest.duration}</span>
              </div>
              <div className="flex items-center gap-1.5 ml-auto">
                <Star size={13} className="text-accent" />
                <span className="font-display text-sm font-bold neon-text-gold">+{quest.xp} pts</span>
              </div>
            </div>

            {/* Detail button */}
            <button
              onClick={() => navigate(`/quest/${quest.id}`)}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-primary text-primary-foreground font-display text-sm font-bold tracking-wider glow-pulse hover:brightness-110 transition-all"
            >
              {quest.locked ? "Voir les détails" : "Voir la quête"}
              <ChevronRight size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QuestCard;
