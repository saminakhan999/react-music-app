import React from 'react';
import { Artist, SongList } from '../../components';
import './index.css';

function Main () {
    return (
      <main>
        <img className={"hand-image"} src={"https://wallpapercave.com/wp/wp4952454.jpg"}></img>
        <h1 className={"main-header"}>Favourite Music by NCT</h1>
        <Artist />
        <SongList />
      </main>
    );
  }
  
  export default Main;
