import BottomTabBar from "@/components/game/BottomTabBar";
import { motion } from "framer-motion";
import { Construction } from "lucide-react";

const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="relative w-full max-w-md mx-auto h-screen overflow-hidden bg-background flex flex-col items-center justify-center">
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="flex flex-col items-center gap-4 text-center"
    >
      <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center glow-pulse">
        <Construction size={28} className="text-primary" />
      </div>
      <h1 className="font-display text-xl font-bold neon-text">{title}</h1>
      <p className="text-sm text-muted-foreground max-w-[200px]">
        Cette section sera bientôt disponible
      </p>
    </motion.div>
    <BottomTabBar />
  </div>
);

export default PlaceholderPage;
