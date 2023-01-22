export const arrayShuffle = <T>(arr: T[]) => {
  return arr
    .map((value) => ({ sort: Math.random(), value }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};
