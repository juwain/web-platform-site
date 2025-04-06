import { memoize } from './lib';

describe('memoize', () => {
  // Мок функции с логикой подсчёта вызовов
  const createMockFn = <T extends (...args: any[]) => any>(
    result: T = (((v: any) => v) as unknown) as T
  ) => {
    const fn = jest.fn((...args: Parameters<T>) => result(...args)) as jest.Mock & { memoized?: T };
    fn.memoized = memoize(fn) as unknown as T;
    return fn;
  };

  it('Функция memoize кеширует результаты для одинаковых аргументов', () => {
    const sum = createMockFn((a: number, b: number) => a + b);

    sum.memoized!(2, 3);
    sum.memoized!(2, 3);

    expect(sum).toHaveBeenCalledTimes(1);
  });
});
