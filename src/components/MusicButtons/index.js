import React, { useState } from 'react';
import './index.css';
import BOSS from './Audio/NCT-U-BOSS.mp3'
import DOMINO from './Audio/WAYV-DOMINO.mp3'

const MusicButton = () => {
    
    const [audio, setAudio] = useState([
        { id: 1, song: 'BOSS', link: BOSS},
        { id: 2, song: 'Domino', link: DOMINO},   
      ])

    const [chosenButton, setChosenButton] = useState()

    const handleButtonSelect = (buttonId) => {
        const chosenButton = audio.find(a => a.id === buttonId);
        setChosenButton(chosenButton);
    };

    const renderAudios = () => audio.map(a => <li key={a.id} onClick={() => handleButtonSelect(a.id)}><strong role="heading" aria-label="song">{a.song}</strong></li>)
         
    function handlePlay() {
        var audio = new Audio(chosenButton.link);
        audio.play();
        audio.volume = 0.1;
    }

    // const handleLike = e => {
    //     e.preventDefault();
    //     if (e.target.textContent === "🤍") {
    //       e.target.textContent = "❤️"
    //     } else {
    //       e.target.textContent = "🤍"
    //     }
    //   };

    function pause() {
        var audio = new Audio(chosenButton.link);
        audio.pause();
    }

    return (
        <section>
            <h3>Listen to some music here!</h3>
            <ul> { renderAudios() } </ul>
            { 
                chosenButton &&
                <section className={'button-section'}> 
                    <button className="play-button" onClick={handlePlay()}>Play {chosenButton.song}</button>
                    <button className="pause-button" onClick={pause()}>Pause {chosenButton.song}</button>
                    <button className="stop-button" onClick={stop()}>Stop Playing {chosenButton.song}</button>
                </section>
            }
        </section>
    )
}

export default MusicButton
