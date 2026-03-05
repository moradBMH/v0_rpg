import { motion } from "framer-motion";

const PlayerMarker = () => (
  <div className="relative">
    {/* Radar sweep */}
    <div className="absolute -inset-8 rounded-full border border-primary/20 radar-sweep">
      <div className="absolute top-1/2 left-1/2 w-1/2 h-0.5 origin-left bg-gradient-to-r from-primary/40 to-transparent" />
    </div>
    
    {/* Outer pulse rings */}
    <motion.div
      className="absolute -inset-6 rounded-full border border-primary/30"
      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
    />
    <motion.div
      className="absolute -inset-4 rounded-full border border-primary/40"
      animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0.1, 0.6] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
    />
    
    {/* Core marker */}
    <div className="relative w-5 h-5 rounded-full bg-primary glow-pulse flex items-center justify-center">
      <div className="w-2 h-2 rounded-full bg-primary-foreground" />
    </div>
  </div>
);

export default PlayerMarker;
