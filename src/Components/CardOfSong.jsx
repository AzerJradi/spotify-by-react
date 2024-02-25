import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../CSS/CardOfSong.css';

function CardOfSong({ song }) {
  return (
    <div className="card">
      <Link to={`/${song.id}`}>
      <Card style={{ width: '16rem' }}>
        <Card.Img variant="top" src={song.ImgName} />
        <Card.Body>
          <Card.Title><p className="SongName">{song.SongName}</p></Card.Title>
          <Card.Subtitle className="mb-2 text-muted"><p className="SingerName">{song.SingerName}</p></Card.Subtitle>
        </Card.Body>
      </Card>
      </Link>
    </div>
  );
}

export default CardOfSong;
