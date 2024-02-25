import React from 'react'
import '../CSS/SongProfil.css'
import { Button } from 'react-bootstrap'
import '../CSS/SongersProfil.css'
import { useParams } from 'react-router-dom'
import dataSongs from '../DataBase.json'

function SongProfil() {
    const para= useParams().id
    const oneSong = dataSongs.filter(el=> el.id === +para)[0]

return (
    <>
    <div className="tthesongCard">
        <div className='SongProfil'>
        <iframe width="100%" height="500px" src={oneSong.musicClip} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p className="songTitle-songprofile">{oneSong.SongName}</p>
        <p className="songSinger-songprofile">{oneSong.SingerName}</p>
        
        <div className="minus-add">
            <Button variant="outline-light" className="add">+</Button>
            <Button variant="outline-light" className="minus">-</Button>
        </div>
        <div className="vid">
            <audio className="vid" controls><source src={oneSong.URLSong} type="audio/mpeg"/></audio>
        </div>
        </div>
    </div>
    </>
)
}

export default SongProfil
