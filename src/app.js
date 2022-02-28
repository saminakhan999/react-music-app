import React from 'react';
import Artist from './components/Artist';
import SongList from './components/MusicList';

function App() {
    return (
      <main>
        <h1>Favourite Music by NCT</h1>
        <Artist />
        <SongList />
      </main>
    );
  }
  
  export default App;
