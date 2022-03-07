import React from 'react';
import { Simon } from '../../components';
import './index.css';

import SIMONSAYS from "../../components/MusicButtons/Audio/NCT-127-SIMON-SAYS.mp3";

let sound = new Audio(SIMONSAYS)
var isSimonDead = true
function handlePlay() {
    if (isSimonDead) {
        sound.play();
        sound.volume = 0.05;
    }
    isSimonDead = false
}

function handleStop() {
    sound.pause();
    sound.currentTime = 0;
}

function Games () {
    return (
        <>
            <h1 className='simon-title'>SIMON SAYS</h1>
            <br />
            <div className="simon-div" onClick={() => {handlePlay()}}>
                <Simon />
            </div>
            <button role="stop-button" className='stop-button' onClick={() => {handleStop()}}>Simon Says STOP (the music)</button>

        </>
    );
  }
  
export default Games;

