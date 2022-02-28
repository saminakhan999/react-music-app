import React from 'react';
import Artist from './components/Artist';
import SongList from './components/MusicList';

function App() {
    return (
      <main>
        <h1>Personal Favourites Music</h1>
        <Artist />
        <SongList />
      </main>
    );
  }
  
  export default App;
