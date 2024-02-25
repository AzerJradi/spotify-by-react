import React from 'react'
import Poadcasts from './Poadcasts'
import '../CSS/Poadcasts.css'

function ListOfPoadcasts({Poadcast}) {
  return (
    <div className='AllPoadcats' >
        {Poadcast.map(title => (
        <Poadcasts key={title.id} poadcast={title} />
      ))}
    </div>
  )
}

export default ListOfPoadcasts
