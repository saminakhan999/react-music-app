import React from 'react';
import { SongList } from '../../components';
import './index.css';

function Favourite () {
    return (
      <div>
        <h1 className={"fave-music-header"}>Favourite Music by NCT</h1>
        <SongList />
      </div>
    );
  }
  
  export default Favourite;
