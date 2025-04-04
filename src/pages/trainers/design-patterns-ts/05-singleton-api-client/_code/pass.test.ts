import apiClient from './apiClient';

describe('ApiClient', () => {
  it('Класс ApiClient должен быть Синглтоном,', () => {
    // Создаем два новых экземпляра через конструктор singleton'а.
    // Используем приведение типа к "any" для вызова конструктора.
    const client1 = new (apiClient.constructor as any)();
    const client2 = new (apiClient.constructor as any)();
    expect(client1).toBe(client2);
  });

  it('а экспортируемый объект должен быть замороженным', () => {
    expect(Object.isFrozen(apiClient)).toBe(true);
  });
});
