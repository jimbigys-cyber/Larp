const GAMES_DATA = [
  { name: 'Adopt Me!', icon: '🐾', players: 320000 },
  { name: 'Brookhaven RP', icon: '🏠', players: 480000 },
  { name: 'Blox Fruits', icon: '⚔️', players: 210000 },
  { name: 'Murder Mystery 2', icon: '🔪', players: 95000 },
  { name: 'Tower of Hell', icon: '🗼', players: 42000 },
  { name: 'Jailbreak', icon: '🚓', players: 78000 },
  { name: 'Piggy', icon: '🐷', players: 32000 },
  { name: 'Arsenal', icon: '🔫', players: 56000 },
  { name: 'Doors', icon: '🚪', players: 145000 },
  { name: 'Bee Swarm Sim', icon: '🐝', players: 28000 },
  { name: 'Pet Simulator 99', icon: '🐕', players: 180000 },
  { name: 'Dress to Impress', icon: '👗', players: 220000 },
];

const MARKET_DATA = {
  limiteds: [
    { name: 'Dominus Empyreus', icon: '👑', price: 1000000, tag: 'LIMITED' },
    { name: 'Sparkle Time Fedora', icon: '🎩', price: 500000, tag: 'LIMITED' },
    { name: 'Clockwork Shades', icon: '🕶️', price: 250000, tag: 'LIMITED' },
    { name: 'Red Valk', icon: '🪖', price: 750000, tag: 'LIMITED' },
    { name: 'Korblox Deathspeaker', icon: '💀', price: 1200000, tag: 'LIMITED' },
    { name: 'Headless Horseman', icon: '🐴', price: 300000, tag: 'LIMITED' },
    { name: 'Dominus Astra', icon: '🌟', price: 2000000, tag: 'LIMITED' },
    { name: 'Dominus Frigidus', icon: '❄️', price: 1500000, tag: 'LIMITED' },
  ],
  collectibles: [
    { name: 'Golden Super Wheel', icon: '🎡', price: 150000, tag: 'COLLECTIBLE' },
    { name: 'Crimson Katana', icon: '🗡️', price: 80000, tag: 'COLLECTIBLE' },
    { name: 'Shaggy', icon: '🧟', price: 95000, tag: 'COLLECTIBLE' },
    { name: 'Sinister Branches', icon: '🌿', price: 45000, tag: 'COLLECTIBLE' },
    { name: 'Frost Guard', icon: '❄️', price: 60000, tag: 'COLLECTIBLE' },
    { name: 'Void Star', icon: '⭐', price: 200000, tag: 'COLLECTIBLE' },
  ],
  ugc: [
    { name: 'Y2K Bucket Hat', icon: '🧢', price: 250, tag: 'UGC' },
    { name: 'Cyber Visor', icon: '🥽', price: 400, tag: 'UGC' },
    { name: 'Fluffy Ears', icon: '🐰', price: 150, tag: 'UGC' },
    { name: 'Neon Wings', icon: '🦋', price: 600, tag: 'UGC' },
    { name: 'Skater Helmet', icon: '🛹', price: 300, tag: 'UGC' },
    { name: 'Heart Glasses', icon: '💕', price: 180, tag: 'UGC' },
  ],
  faces: [
    { name: 'Winning Smile', icon: '😁', price: 120, tag: 'FACE' },
    { name: 'Chill Face', icon: '😎', price: 250, tag: 'FACE' },
    { name: 'Surprised', icon: '😲', price: 80, tag: 'FACE' },
    { name: 'Mischievous', icon: '😈', price: 350, tag: 'FACE' },
  ],
};

const DEFAULT_STATE = {
  name: 'Guest1337',
  user: '@guest1337',
  bio: 'No bio yet.',
  avatar: '😎',
  robux: 0,
  verified: 'none',
  friends: 0,
  followers: 0,
  following: 0,
  loggedIn: false,
};

function loadState() {
  try {
    const saved = localStorage.getItem('robloxLarpState');
    if (saved) return JSON.parse(saved);
  } catch (e) {}
  return { ...DEFAULT_STATE };
}

function saveState(s) {
  try { localStorage.setItem('robloxLarpState', JSON.stringify(s)); } catch (e) {}
}

let state = loadState();
