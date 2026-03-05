export interface QuestStep {
  label: string;
  completed: boolean;
}

export interface QuestReward {
  type: "badge" | "points" | "impact";
  label: string;
  value: string;
  icon: string; // emoji
}

export interface Quest {
  id: string;
  title: string;
  description: string;
  distance: string;
  duration: string;
  difficulty: "Facile" | "Moyen" | "Difficile";
  xp: number;
  locked: boolean;
  type: "explore" | "run" | "challenge" | "social";
  position: { top: string; left: string };
  steps: QuestStep[];
  rewards: QuestReward[];
}

export const QUESTS: Quest[] = [
  {
    id: "q1",
    title: "Explorer les ruelles",
    description: "Parcourez les ruelles cachées du vieux centre et découvrez ses secrets architecturaux.",
    distance: "0.3 km",
    duration: "20 min",
    difficulty: "Facile",
    xp: 50,
    locked: false,
    type: "explore",
    position: { top: "28%", left: "65%" },
    steps: [
      { label: "Rejoindre la place centrale", completed: false },
      { label: "Longer la rue du marché", completed: false },
      { label: "Photographier la fresque murale", completed: false },
      { label: "Terminer au parc", completed: false },
    ],
    rewards: [
      { type: "badge", label: "Badge Explorateur", value: "🏅", icon: "🏅" },
      { type: "points", label: "Points XP", value: "+50", icon: "⚡" },
      { type: "impact", label: "Impact Éco", value: "+5", icon: "🌱" },
    ],
  },
  {
    id: "q2",
    title: "Le Sentier des Lumières",
    description: "Suivez le parcours lumineux à travers les installations artistiques nocturnes de la ville.",
    distance: "1.2 km",
    duration: "35 min",
    difficulty: "Moyen",
    xp: 120,
    locked: false,
    type: "run",
    position: { top: "38%", left: "25%" },
    steps: [
      { label: "Départ à la fontaine lumineuse", completed: false },
      { label: "Traverser le passage étoilé", completed: false },
      { label: "Longer le canal illuminé", completed: false },
      { label: "Atteindre l'arche néon", completed: false },
      { label: "Finir au belvédère", completed: false },
    ],
    rewards: [
      { type: "badge", label: "Badge Nocturne", value: "🌙", icon: "🌙" },
      { type: "points", label: "Points XP", value: "+120", icon: "⚡" },
      { type: "impact", label: "Impact Éco", value: "+10", icon: "🌱" },
    ],
  },
  {
    id: "q3",
    title: "Sprint du Vieux Port",
    description: "Un défi de vitesse le long des quais historiques. Battez le chrono !",
    distance: "0.8 km",
    duration: "15 min",
    difficulty: "Difficile",
    xp: 80,
    locked: false,
    type: "challenge",
    position: { top: "55%", left: "72%" },
    steps: [
      { label: "Sprint jusqu'à la jetée", completed: false },
      { label: "Contourner le phare", completed: false },
      { label: "Revenir au point de départ", completed: false },
    ],
    rewards: [
      { type: "badge", label: "Badge Sprinter", value: "🏃", icon: "🏃" },
      { type: "points", label: "Points XP", value: "+80", icon: "⚡" },
      { type: "impact", label: "Impact Éco", value: "+3", icon: "🌱" },
    ],
  },
  {
    id: "q4",
    title: "Zone secrète : Parc Nord",
    description: "Une zone mystérieuse attend les explorateurs de niveau 5.",
    distance: "2.1 km",
    duration: "45 min",
    difficulty: "Difficile",
    xp: 200,
    locked: true,
    type: "explore",
    position: { top: "20%", left: "40%" },
    steps: [
      { label: "Trouver l'entrée cachée", completed: false },
      { label: "Traverser le labyrinthe vert", completed: false },
      { label: "Découvrir le monument ancien", completed: false },
      { label: "Scanner le QR code secret", completed: false },
      { label: "Rejoindre la clairière", completed: false },
    ],
    rewards: [
      { type: "badge", label: "Badge Mystère", value: "🔮", icon: "🔮" },
      { type: "points", label: "Points XP", value: "+200", icon: "⚡" },
      { type: "impact", label: "Impact Éco", value: "+15", icon: "🌱" },
    ],
  },
  {
    id: "q5",
    title: "Course des Arcades",
    description: "Slalomez entre les arcades historiques dans cette course chronométrée.",
    distance: "0.5 km",
    duration: "12 min",
    difficulty: "Facile",
    xp: 60,
    locked: false,
    type: "run",
    position: { top: "62%", left: "35%" },
    steps: [
      { label: "Passer sous la première arcade", completed: false },
      { label: "Sprinter la ligne droite", completed: false },
      { label: "Franchir l'arrivée", completed: false },
    ],
    rewards: [
      { type: "badge", label: "Badge Arcade", value: "🏛️", icon: "🏛️" },
      { type: "points", label: "Points XP", value: "+60", icon: "⚡" },
      { type: "impact", label: "Impact Éco", value: "+4", icon: "🌱" },
    ],
  },
  {
    id: "q6",
    title: "Défi communautaire",
    description: "Rejoignez d'autres joueurs pour accomplir un défi collectif en ville.",
    distance: "1.5 km",
    duration: "40 min",
    difficulty: "Moyen",
    xp: 150,
    locked: true,
    type: "social",
    position: { top: "45%", left: "55%" },
    steps: [
      { label: "Se rassembler au point de rencontre", completed: false },
      { label: "Réaliser le défi photo de groupe", completed: false },
      { label: "Parcourir le circuit ensemble", completed: false },
      { label: "Célébrer au point d'arrivée", completed: false },
    ],
    rewards: [
      { type: "badge", label: "Badge Social", value: "🤝", icon: "🤝" },
      { type: "points", label: "Points XP", value: "+150", icon: "⚡" },
      { type: "impact", label: "Impact Éco", value: "+12", icon: "🌱" },
    ],
  },
];
