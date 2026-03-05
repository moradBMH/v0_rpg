import { Map, Scroll, Users, User } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const tabs = [
  { label: "Carte", icon: Map, to: "/" },
  { label: "Quêtes", icon: Scroll, to: "/quests" },
  { label: "Communauté", icon: Users, to: "/community" },
  { label: "Profil", icon: User, to: "/profile" },
];

const BottomTabBar = () => {
  const location = useLocation();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <div className="border-t border-primary/15 px-2 pb-1 pt-1.5 flex justify-around items-center" style={{ background: "rgba(255,255,255,1)" }}>
        {tabs.map((tab) => {
          const active = location.pathname === tab.to;
          return (
            <NavLink
              key={tab.to}
              to={tab.to}
              className="relative flex flex-col items-center gap-0.5 px-3 py-1"
            >
              {active && (
                <motion.div
                  layoutId="tab-glow"
                  className="absolute -top-1.5 w-8 h-1 rounded-full bg-primary"
                  style={{ boxShadow: "0 0 12px hsl(var(--primary) / 0.6)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <tab.icon
                size={20}
                className={active ? "text-primary" : "text-muted-foreground"}
              />
              <span
                className={`text-[10px] font-display font-bold tracking-wider ${
                  active ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {tab.label}
              </span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default BottomTabBar;
