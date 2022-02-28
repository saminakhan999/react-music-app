import React from 'react';
import Artist from './components/Artist';
import SongList from './components/MusicList';
import './App.css';

function App() {
    return (
      <main>
        <img className={"hand-image"} src={"https://wallpapercave.com/wp/wp4952454.jpg"}></img>
        <h1 className={"main-header"}>Favourite Music by NCT</h1>
        <Artist />
        <SongList />
      </main>
    );
  }
  
  export default App;
