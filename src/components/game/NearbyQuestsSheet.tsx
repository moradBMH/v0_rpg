import { motion } from "framer-motion";
import { Navigation, Clock, Star, Lock, ChevronUp } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Quest } from "@/data/quests";

interface Props {
  quests: Quest[];
  onSelectQuest: (quest: Quest) => void;
}

const NearbyQuestsSheet = ({ quests, onSelectQuest }: Props) => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  return (
    // ✅ Wrapper qui centre
    <div className="fixed bottom-[3.25rem] left-0 right-0 flex justify-center z-30 pointer-events-none">      
      <motion.div
        // ✅ même largeur que la bottom bar
        style={{ width: "min(100%, 28rem)" }}
        className="pointer-events-auto"
        animate={{ y: expanded ? 0 : "calc(66vh - 120px)" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div
          className="w-full rounded-t-2xl border border-primary/20 shadow-lg flex flex-col overflow-hidden"
          style={{
            background: "rgba(255,255,255,1)",
            height: "66vh",
          }}
        >
          {/* Handle */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center justify-center gap-2 px-4 py-3 border-b border-primary/20"
          >
            <motion.div animate={{ rotate: expanded ? 180 : 0 }}>
              <ChevronUp size={16} className="text-primary" />
            </motion.div>

            <span className="font-display text-xs font-bold text-foreground tracking-wider">
              Quêtes proches
            </span>

            <span className="px-1.5 py-0.5 rounded-full bg-primary/20 text-primary font-display text-[10px] font-bold">
              {quests.filter((q) => !q.locked).length}
            </span>
          </button>

          {/* Scrollable list */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2">
            {quests.map((quest) => (
              <motion.button
                key={quest.id}
                onClick={() => {
                  onSelectQuest(quest);
                  navigate(`/quest/${quest.id}`);
                }}
                className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-muted/40 transition-colors text-left"
                whileTap={{ scale: 0.97 }}
              >
                {/* Icon */}
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                    quest.locked
                      ? "bg-muted border border-border"
                      : "bg-primary/10 border border-primary/30"
                  }`}
                >
                  {quest.locked ? (
                    <Lock size={14} className="text-muted-foreground" />
                  ) : (
                    <Star size={14} className="text-primary" />
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p
                    className={`text-sm font-semibold truncate ${
                      quest.locked
                        ? "text-muted-foreground"
                        : "text-foreground"
                    }`}
                  >
                    {quest.title}
                  </p>

                  <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Navigation size={10} />
                      {quest.distance}
                    </span>

                    <span className="flex items-center gap-1">
                      <Clock size={10} />
                      {quest.duration}
                    </span>
                  </div>
                </div>

                {/* XP */}
                <span
                  className={`font-display text-xs font-bold shrink-0 ${
                    quest.locked
                      ? "text-muted-foreground"
                      : "neon-text-gold"
                  }`}
                >
                  +{quest.xp}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NearbyQuestsSheet;
