import React from 'react';
import { Artist, MusicButton, SongList } from '../../components';
import './index.css';

function Main () {
    return (
      <main>
        <h1 className={"fave-music-header"}>Favourite Music by NCT</h1>
        <Artist />
        <SongList />
      </main>
    );
  }
  
  export default Main;
