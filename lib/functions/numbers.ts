// genreate random numbres
export function randomIntFromInterval(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// genereate numbers
export function generateNumbers(n: number): number[] {
  return [...Array(n).keys()];
}
