import React from 'react';
import { GameContext } from '../context/GameContext.js';
import Card from './Card';
import { useContext } from 'react';

export default function CardList({ player }) {
  const { deck: cards } = useContext(GameContext);
  return (
    <div className="card-list">
      {cards.map((card) => (
        <Card key={card.suit + card.value} player={player} card={card} />
      ))}
    </div>
  );
}
