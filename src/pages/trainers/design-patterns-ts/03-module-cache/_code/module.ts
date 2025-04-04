import { calculateAverage } from './lib';

const cache = new WeakMap<Record<string, number[]>, number[]>();

function processSurveyData(obj: Record<string, number[]>): number[] {
  // If the result is cached for this object, return it.
  if (cache.has(obj)) {
    return cache.get(obj)!;
  }

  // Тяжёлые вычисления: средний балл для каждого пользователя
  const result: number[] = Object.values(obj).map(calculateAverage);

  // Cache the result for future calls.
  cache.set(obj, result);

  return result;
}

export { processSurveyData };
