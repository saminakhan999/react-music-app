import React from 'react';
import { Simon } from '../../components';
import './index.css';

import SIMONSAYS from "../../components/MusicButtons/Audio/NCT-127-SIMON-SAYS.mp3";

let sound = new Audio(SIMONSAYS)

function handlePlay() {
    sound.play();
    sound.volume = 0.05;
}

function Games () {
    return (
        <>
            <h1>SIMON SAYS</h1>
            <br />
            <div onClick={() => {handlePlay()}}>
                <Simon />
            </div>
        </>
    );
  }
  
export default Games;

