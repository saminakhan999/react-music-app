import React, { useState } from 'react';
import './index.css';
import BOSS from './Audio/NCT-U-BOSS.mp3'

const MusicButton = () => {
    
    const [audio, setAudio] = useState([
        { id: 1, song: 'BOSS'},
        { id: 2, song: 'Domino'},   
      ])

    const [chosenButton, setChosenButton] = useState()

    const handleButtonSelect = buttonId => {
        const chosenButton = audio.find(a => a.id === buttonId);
        setChosenButton(chosenButton);
    };

    const renderAudios = () => audio.map(a => <li key={a.id} onClick={() => handleButtonSelect(a.id)}><strong role="heading" aria-label="song">{a.song}</strong></li>)

      
    function play() {
        var audio = new Audio(BOSS);
        audio.play();
    }

    return (

        <section>
            <h3>Listen to some music here!</h3>
            <ul> { renderAudios() } </ul>
            { 
                chosenButton &&
                    <article id="audio-button">
                    <h3>{chosenButton.song}</h3>
                    <button id="audio" onClick={play()}>Play {chosenButton.song}</button>
                    </article>
            }
        </section>
    )
}

export default MusicButton
