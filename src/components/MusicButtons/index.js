import React, { useState } from 'react';
import './index.css';
import BOSS from './Audio/NCT-U-BOSS.mp3'
import DOMINO from './Audio/WAYV-DOMINO.mp3'
import COW from "./Audio/COW.mp3";
import SHEEP from "./Audio/SHEEP.mp3";

const MusicButton = () => {
    
    const [audio, setAudio] = useState([
      { id: 1, song: "BOSS", link: BOSS },
      { id: 2, song: "Domino", link: DOMINO },
      { id: 3, song: "COW", link: COW },
      { id: 4, song: "SHEEP", link: SHEEP },
    ]);

    const [chosenButton, setChosenButton] = useState()

    const handleButtonSelect = (buttonId) => {
        const chosenButton = audio.find(a => a.id === buttonId);
        setChosenButton(chosenButton);
    };

    const renderAudios = () => audio.map(a => <li key={a.id} onClick={() => handleButtonSelect(a.id)}><strong role="heading" aria-label="song">{a.song}</strong></li>)
         
    var audioo = chosenButton && new Audio(chosenButton.link);

    function handlePlay() {
        audioo.play();
        audioo.volume = 0.05;
    }

    
    function handlePause() {
        audioo.pause();
        console.log("it worked")
    }

    function handleStop() {
        audioo.pause();
        audioo.currentTime = 0;

    }


    return (
      <>
        <h3 className={"listen-header"}>Listen to some music here!</h3>
        <ul className={"listen-list"}> {renderAudios()} </ul>
        {chosenButton && (
          <section className={"button-section"}>
            <button className="play-button" onClick={() => handlePlay()}>
              Play {chosenButton.song}
            </button>
            <button className="pause-button" onClick={() => handlePause()}>
              Pause {chosenButton.song}
            </button>
            <button className="stop-button" onClick={() => handleStop()}>
              Stop {chosenButton.song}
            </button>
          </section>
        )}
      </>
    );
}

export default MusicButton
