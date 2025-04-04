export function calculateAverage(answers: number[]): number {
  const sum = answers.reduce((acc, val) => acc + val, 0);
  return sum / answers.length;
}
