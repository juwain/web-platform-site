import React from 'react';
import { processSurveyData } from './module';

type SurveyData = Record<string, number[]>;

const surveyData: SurveyData = {
  user1: [1, 2, 3, 4, 5],
  user2: [7, 1, 5, 3, 2],
  user3: [1, 2, 1, 2, 1],
  user4: [2, 2, 3, 2, 3],
  user5: [5, 4, 3, 4, 5],
};

export default function App(): JSX.Element {
  const result = processSurveyData(surveyData);

  return (
    <>
      <p>Данные пользователей:</p>
      <ul>
        {Object.entries(surveyData).map(([user, data]) => (
          <li key={user}>
            {user}: {data.join(', ')}
          </li>
        ))}
      </ul>
      <p>Средние результаты пользователей:</p>
      <p>{result && result.join(', ')}</p>
    </>
  );
}
