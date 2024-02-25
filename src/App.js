import React, { useState } from 'react';
import './CSS/App.css'
import { Route, Routes } from "react-router-dom";
import FilterAndNavbar from "./Components/FilterAndNavbar";
import Playlist from "./Components/Playlist";
import ListOfCards from "./Components/ListOfCards";
import MusicBottom from "./Components/MusicBottom";
import MenuBtn from "./Components/MenuBtn";
import SongProfil from "./Components/SongProfil";
import ListOfSongers from "./Components/ListOfSongers";
import Data from './DataBase.json';
import SongData from './Singers.json';
import Poadcast from './Poadcasts.json'
import TheSongerTitleAndStuff from './Components/TheSongerTitleAndStuff';
import LoginIn from './Components/LoginIn';
import SignUp from './Components/SignUp';
import ListOfPoadcasts from './Components/ListOfPoadcasts';
import PoadcastProfil from './Components/PoadcastProfil';

function App() {
  const [titleValue, setTitleValue] = useState("");
  return (
    <>
      <FilterAndNavbar setTitleValue={setTitleValue} titleValue={titleValue}/>
      <div className="app">
        <Routes>
          <Route path='/' element={ <><Playlist/> <ListOfCards theData={Data}/></>  }/>
            <Route path="/thehome" element={ <><Playlist/> <ListOfCards theData={Data}/></>  }/>
            <Route path='/MusicBottom' element={<MusicBottom/>}/>
            <Route path="/menu" element={<><MenuBtn/> <ListOfCards theData={Data}/></>}/>
            <Route path="/profil" element={<LoginIn/>}/>
            <Route path='/:id' element={<SongProfil/>}/>
            <Route path='/songer/:id' element={<TheSongerTitleAndStuff/>}/>
            <Route path="/ListOfSingers" element={<ListOfSongers SongData={SongData}/>}/>
            <Route path="/Playlist" element={<Playlist/>}/>
            <Route path="/AllSingers" element={<ListOfSongers SongData={SongData}/>}/>
            <Route path="/Poadcasts" element={<ListOfPoadcasts Poadcast={Poadcast}/>}/>
            <Route path='/singUp' element={<SignUp/>}/>
            <Route path='/poadcast/:id' element={<PoadcastProfil/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
