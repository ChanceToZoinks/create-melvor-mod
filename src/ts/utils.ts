import Manifest from "../../manifest.json";

export const clamp = (num: number, min: number, max: number) => {
  return Math.min(Math.max(num, min), max);
};

export const check_gamemode = () => {
  return game.currentGamemode.namespace === Manifest.namespace;
};
