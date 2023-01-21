export const clamp = (num: number, min: number, max: number) => {
  return Math.min(Math.max(num, min), max);
};

export const check_gamemode = (gamemode = "mod-template-gamemode") => {
  return game.currentGamemode.namespace === gamemode;
};
