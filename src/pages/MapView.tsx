import { useState } from "react";
import { motion } from "framer-motion";
import mapBg from "@/assets/map-bg.jpg";
import GPSMarker from "@/components/game/GPSMarker";
import QuestPin from "@/components/game/QuestPin";
import QuestCard from "@/components/game/QuestCard";
import NearbyQuestsSheet from "@/components/game/NearbyQuestsSheet";
import BottomTabBar from "@/components/game/BottomTabBar";
import XPBar from "@/components/game/XPBar";
import { QUESTS, type Quest } from "@/data/quests";

const MapView = () => {
  const [selectedQuest, setSelectedQuest] = useState<Quest | null>(null);

  const handlePinTap = (quest: Quest) => {
    setSelectedQuest(quest);
  };

  return (
    <div className="relative w-full max-w-md mx-auto h-screen overflow-hidden bg-background">
      {/* Map background */}
      <div className="absolute inset-0">
        <motion.img
          src={mapBg}
          alt=""
          className="w-full h-full object-cover"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
      </div>

      {/* Exploration zone circles */}
      <motion.div
        className="absolute top-[35%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-primary/10 z-[5]"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className="absolute inset-0 rounded-full bg-primary/[0.03]" />
      </motion.div>
      <motion.div
        className="absolute top-[55%] left-[60%] -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-secondary/10 z-[5]"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        <div className="absolute inset-0 rounded-full bg-secondary/[0.03]" />
      </motion.div>

      {/* Quest pins */}
      {QUESTS.map((quest, i) => (
        <QuestPin key={quest.id} quest={quest} index={i} onTap={handlePinTap} />
      ))}

      {/* GPS marker */}
      <GPSMarker />

      {/* Top HUD */}
      <div className="absolute top-0 left-0 right-0 z-30 px-4 pt-6 pb-3">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-center justify-between mb-3"
        >
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-semibold">
              Exploration
            </p>
            <h1 className="font-display text-lg font-bold neon-text tracking-wide">
              Centre-Ville
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="px-3 py-1 rounded-full glass-panel border border-health-green/30">
              <span className="font-display text-xs font-bold text-health-green">🔥 7j</span>
            </div>
          </div>
        </motion.div>
        <XPBar />
      </div>

      {/* Floating quest card */}
      <QuestCard quest={selectedQuest} onClose={() => setSelectedQuest(null)} />

      {/* Bottom sheet */}
      <NearbyQuestsSheet quests={QUESTS} onSelectQuest={handlePinTap} />

      {/* Tab bar */}
      <BottomTabBar />

      {/* Scan lines */}
      <div
        className="absolute inset-0 z-[60] pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(var(--primary) / 0.1) 2px, hsl(var(--primary) / 0.1) 4px)",
        }}
      />
    </div>
  );
};

export default MapView;
