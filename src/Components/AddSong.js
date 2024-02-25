import React, { useState } from 'react'

function AddSong() {
    const [newfilm, setNewfilm] = useState({
        image: "",
        title: "",
        decr: "",
        rate: "",
        stream: "",
        download: "",
        genre: "genre"
    });
    
    // Handle changes in the input fields
    const handleChange = (event) => {
        const { name, value } = event.target;
        // Update the state with the new values
        setNewfilm(prevFilm => ({
            ...prevFilm,
            [name]: value
        }));
    };
    return (
        <div className='profil'>
            <div className='input'>
                <input type='text' name='image' className='image' placeholder='Video Clip Link' value={newfilm.image} /> <br />
                <input type='text' name='title' className='title' placeholder='Name Of Song' value={newfilm.title} /> <br />
                <input type='text' name='stream' className='stream' placeholder='Name of Singer' value={newfilm.stream} /> <br />
                <input type='text' name='download' className='download' placeholder='Picture Of Song' value={newfilm.download} /> <br />
                <input type='text' name='download' className='download' placeholder='MP3 Link' value={newfilm.download} /> <br />
            </div>
        </div>
  )
}

export default AddSong
