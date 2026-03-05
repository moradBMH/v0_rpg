import { motion } from "framer-motion";
import { Zap, Flame, Timer, Navigation } from "lucide-react";

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  color?: string;
}

const StatItem = ({ icon, value, label }: StatItemProps) => (
  <div className="flex flex-col items-center gap-0.5">
    <div className="text-primary/70">{icon}</div>
    <span className="font-display text-lg font-bold tracking-wider text-foreground">{value}</span>
    <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">{label}</span>
  </div>
);

const StatsHUD = () => (
  <motion.div
    initial={{ y: 30, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.3, duration: 0.5 }}
    className="glass-panel neon-border rounded-2xl px-4 py-3 flex justify-between items-center"
  >
    <StatItem icon={<Navigation size={16} />} value="3.2" label="km" />
    <div className="w-px h-8 bg-border" />
    <StatItem icon={<Timer size={16} />} value="18:42" label="temps" />
    <div className="w-px h-8 bg-border" />
    <StatItem icon={<Flame size={16} />} value="245" label="cal" />
    <div className="w-px h-8 bg-border" />
    <StatItem icon={<Zap size={16} />} value={"5'51\""} label="pace" />
  </motion.div>
);

export default StatsHUD;
