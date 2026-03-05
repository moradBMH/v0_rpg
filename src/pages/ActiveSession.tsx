import { motion } from "framer-motion";
import mapBg from "@/assets/map-bg.jpg";
import PlayerMarker from "@/components/game/PlayerMarker";
import XPBar from "@/components/game/XPBar";
import StatsHUD from "@/components/game/StatsHUD";
import QuestTracker from "@/components/game/QuestTracker";
import ActionBar from "@/components/game/ActionBar";

const ActiveSession = () => {
  return (
    <div className="relative w-full max-w-md mx-auto h-screen overflow-hidden bg-background">
      {/* Map background */}
      <div className="absolute inset-0">
        <motion.img
          src={mapBg}
          alt=""
          className="w-full h-full object-cover opacity-60"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-background/80" />
      </div>

      {/* Player marker centered */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <PlayerMarker />
      </div>

      {/* Nearby POI indicators */}
      <motion.div
        className="absolute top-[38%] right-[25%] z-10"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.4, type: "spring" }}
      >
        <div className="w-6 h-6 rounded-full bg-secondary/20 border border-secondary/60 flex items-center justify-center float-up">
          <div className="w-2 h-2 rounded-full bg-secondary" />
        </div>
      </motion.div>

      <motion.div
        className="absolute top-[42%] left-[20%] z-10"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.4, type: "spring" }}
      >
        <div className="w-5 h-5 rounded-full bg-accent/20 border border-accent/60 flex items-center justify-center float-up" style={{ animationDelay: "1s" }}>
          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
        </div>
      </motion.div>

      {/* HUD overlay */}
      <div className="relative z-20 flex flex-col h-full px-4 py-6 pb-8">
        {/* Top section: Header + XP */}
        <div className="space-y-3">
          {/* Header */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex items-center justify-between"
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-semibold">
                Sortie en cours
              </p>
              <h1 className="font-display text-lg font-bold neon-text tracking-wide">
                Exploration
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

        {/* Spacer to push content to bottom */}
        <div className="flex-1" />

        {/* Bottom section: Quest + Stats + Actions */}
        <div className="space-y-3">
          <QuestTracker />
          <StatsHUD />
          <ActionBar />
        </div>
      </div>

      {/* Scan lines effect */}
      <div
        className="absolute inset-0 z-30 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(var(--primary) / 0.1) 2px, hsl(var(--primary) / 0.1) 4px)",
        }}
      />
    </div>
  );
};

export default ActiveSession;
