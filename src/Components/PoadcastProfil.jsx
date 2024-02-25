import React from 'react'
import { useParams } from 'react-router-dom'
import Poadcast from '../Poadcasts.json'
import { Button } from 'react-bootstrap';

function PoadcastProfil() {
    const para= useParams().id
    const ThePoadcast = Poadcast.filter(el=> el.id === +para)[0]

return (
    <>
    <div className="tthesongCard">
        <div className='SongProfil'>
        <iframe width="100%" height="300px" src={ThePoadcast.LinkToWatch} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p className="songTitle-songprofile">{ThePoadcast.MainPerson}</p>
        <p className="songSinger-songprofile">{ThePoadcast.Guest}</p>
        
        <div className="minus-add">
            <Button variant="outline-light" className="add">+</Button>
            <Button variant="outline-light" className="minus">-</Button>
        </div>
        <div className="vid">
            <audio controls><source src={ThePoadcast.MP3Link} type="audio/mpeg"/></audio>
        </div>
        </div>
    </div>
    </>
)
}

export default PoadcastProfil
