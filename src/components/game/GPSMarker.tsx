import { motion } from "framer-motion";

const GPSMarker = () => (
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
    {/* Outer pulse */}
    <motion.div
      className="absolute -inset-6 rounded-full bg-primary/10"
      animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0, 0.3] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    />
    {/* Mid ring */}
    <motion.div
      className="absolute -inset-3 rounded-full border border-primary/30"
      animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.2, 0.5] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />
    {/* Core */}
    <div className="relative w-5 h-5 rounded-full bg-primary border-2 border-primary-foreground glow-pulse" 
      style={{ boxShadow: "0 0 20px hsl(var(--primary) / 0.6)" }}
    />
    {/* Direction indicator */}
    <motion.div
      className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0"
      style={{
        borderLeft: "4px solid transparent",
        borderRight: "4px solid transparent",
        borderBottom: "6px solid hsl(var(--primary))",
      }}
      animate={{ y: [-1, -3, -1] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
  </div>
);

export default GPSMarker;
