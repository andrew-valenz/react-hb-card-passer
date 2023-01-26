import React from 'react';
import Card from './Card';
import { useContext } from 'react';
import { GameContext } from '../context/GameContext.js';

export default function ExecutePassButton({ passCard }) {
  const { setFrom, from, to, selectedCard } = useContext(GameContext);

  return (
    <div className="execute-button" onClick={() => passCard(selectedCard)}>
      Pass <Card card={selectedCard} setFrom={setFrom} /> from {from} to {to}
    </div>
  );
}
