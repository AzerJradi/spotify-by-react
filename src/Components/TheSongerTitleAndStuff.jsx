import React from 'react'
import '../CSS/TheSongerTitleAndStuff.css'
import { useParams } from 'react-router-dom'
import dataSingers from "../Singers.json"
import DataOfSongs from '../DataBase.json'

function TheSongerTitleAndStuff() {

  const para= useParams().id
  const oneSinger = dataSingers.filter(el=> el.id === +para)[0]
  const music = DataOfSongs.filter(el=> el.SingerName ===oneSinger.name )[0]

  return (
    <>
      <div className="singerProfile">
        <div className='singersImages'>
          <img src={oneSinger.IMG} alt="" className="IMG-of-Songer" />
        </div>
        <div className='singersProfil'>
          <p> {oneSinger.name} </p>
          <p className="">{oneSinger.NumberOfTitle}</p>
            <div className="eachSongOf">
            <img src={music.ImgName} alt="" className="IMG-of-song" />
            <p className="">{music.SongName}</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default TheSongerTitleAndStuff
