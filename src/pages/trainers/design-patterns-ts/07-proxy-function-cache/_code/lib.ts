function memoize<T extends (...args: any[]) => any>(fn: T): T {
  const cache = new Map<string, ReturnType<T>>();

  return new Proxy(fn, {
    apply(target: T, _, args: Parameters<T>): ReturnType<T> {
      const key = JSON.stringify(args);

      // если результат есть в кеше, возвращаем его
      if (cache.has(key)) {
        return cache.get(key)!;
      }

      const result = target(...args);

      // записываем результат в кеш
      cache.set(key, result);

      return result;
    },
  });
}

export { memoize };
