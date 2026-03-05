import { motion } from "framer-motion";
import { MapPin, Swords, Footprints, Zap, Users, Lock } from "lucide-react";
import type { Quest } from "@/data/quests";

const typeIcons: Record<Quest["type"], React.ReactNode> = {
  explore: <Footprints size={14} />,
  run: <Zap size={14} />,
  challenge: <Swords size={14} />,
  social: <Users size={14} />,
};

const typeColors: Record<Quest["type"], string> = {
  explore: "primary",
  run: "accent",
  challenge: "secondary",
  social: "energy-blue",
};

interface QuestPinProps {
  quest: Quest;
  index: number;
  onTap: (quest: Quest) => void;
}

const QuestPin = ({ quest, index, onTap }: QuestPinProps) => {
  const colorVar = typeColors[quest.type];

  return (
    <motion.button
      className="absolute z-10 flex flex-col items-center"
      style={{ top: quest.position.top, left: quest.position.left }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.3 + index * 0.12, type: "spring", stiffness: 260, damping: 20 }}
      onClick={() => onTap(quest)}
      whileTap={{ scale: 0.9 }}
    >
      {/* Pulse ring */}
      {!quest.locked && (
        <div
          className="absolute w-10 h-10 rounded-full animate-ping opacity-20"
          style={{ backgroundColor: `hsl(var(--${colorVar}))`, animationDuration: "3s" }}
        />
      )}

      {/* Pin body */}
      <div
        className={`relative w-10 h-10 rounded-full flex items-center justify-center border-2 ${
          quest.locked ? "bg-muted/80 border-muted-foreground/30" : ""
        }`}
        style={
          !quest.locked
            ? {
                backgroundColor: `hsl(var(--${colorVar}) / 0.2)`,
                borderColor: `hsl(var(--${colorVar}) / 0.7)`,
                boxShadow: `0 0 14px hsl(var(--${colorVar}) / 0.4)`,
              }
            : undefined
        }
      >
        {quest.locked ? (
          <Lock size={16} className="text-muted-foreground" />
        ) : (
          <span style={{ color: `hsl(var(--${colorVar}))` }}>{typeIcons[quest.type]}</span>
        )}
      </div>

      {/* XP badge */}
      {!quest.locked && (
        <div
          className="mt-1 px-1.5 py-0.5 rounded-full text-[9px] font-display font-bold"
          style={{
            backgroundColor: `hsl(var(--${colorVar}) / 0.15)`,
            color: `hsl(var(--${colorVar}))`,
            border: `1px solid hsl(var(--${colorVar}) / 0.3)`,
          }}
        >
          +{quest.xp}
        </div>
      )}
    </motion.button>
  );
};

export default QuestPin;
