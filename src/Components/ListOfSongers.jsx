import React from 'react'
import SongersProfil from './SongersProfil'
import '../CSS/ListOfSongers.css'

function ListOfSongers({ SongData }) {
  return (
    <div className="card-container-singers">
      {SongData.map(singer => (
        <SongersProfil key={singer.id} singer={singer} />
      ))}
    </div>
  )
}

export default ListOfSongers
