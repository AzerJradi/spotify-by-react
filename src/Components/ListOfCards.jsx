import React from 'react';
import CardOfSong from './CardOfSong';
import '../CSS/ListOfCards.css';

function ListOfCards({ theData }) {
  return (
    <div className="card-container">
      {theData.map(song => (
        <CardOfSong key={song.id} song={song} />
      ))}
    </div>
  );
}

export default ListOfCards;
