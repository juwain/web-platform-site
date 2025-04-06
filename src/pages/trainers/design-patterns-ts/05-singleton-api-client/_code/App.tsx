import React, { useEffect, useState } from 'react';
import apiClient from './apiClient';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default function App(): JSX.Element | null {
  const [data, setData] = useState<Todo | null>(null);

  useEffect(() => {
    apiClient
      .get('/todos/1')
      .then((response) => setData(response.data))
      .catch((error) => console.error('Ошибка:', error));
  }, []);

  return (
    data && (
      <div>
        <h1>Title: {data.title}</h1>
        <p>Id: {data.id}</p>
        <p>UserId: {data.userId}</p>
        <p>Completed: {String(data.completed)}</p>
      </div>
    )
  );
}
