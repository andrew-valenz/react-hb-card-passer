import React from 'react';
import Card from './Card';

export default function ExecutePassButton({ passCard, setFrom, from, to, selectedCard }) {
  return (
    <div className="execute-button" onClick={() => passCard(selectedCard)}>
      Pass <Card card={selectedCard} setFrom={setFrom} /> from {from} to {to}
    </div>
  );
}
