
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';
import BOSS from './Audio/NCT-U-BOSS.mp3'
import DOMINO from './Audio/WAYV-DOMINO.mp3'
// import COW from "./Audio/COW.mp3";
// import SHEEP from "./Audio/SHEEP.mp3";
import CHERRYBOMB from "./Audio/NCT-127-CHERRY-BOMB.mp3";
import LIMITLESS from "./Audio/NCT-127-LIMITLESS.mp3";
import STICKER from "./Audio/NCT-127-STICKER.mp3";
import LEMONADE from "./Audio/NCT-127-LEMONADE.mp3";
import SIMONSAYS from "./Audio/NCT-127-SIMON-SAYS.mp3";
import TURNBACKTIME from "./Audio/WAYV-TURN-BACK-TIME.mp3";

const MusicButton = () => {
    
    const [audio, setAudio] = useState([
      { id: 1, song: "BOSS", link: BOSS, artistName: "NCT", songName: "boss" },
      { id: 2, song: "Domino", link: DOMINO, artistName: "WAYV", songName: "domino" },
      { id: 3, song: "Cherry Bomb", link: CHERRYBOMB, artistName: "NCT", songName: "cherry-bomb"},
      { id: 4, song: "Limitless", link: LIMITLESS, artistName: "NCT", songName: "limitless"},
      { id: 5, song: "Sticker", link: STICKER, artistName: "NCT", songName: "sticker"},
      { id: 6, song: "Lemonade", link: LEMONADE, artistName: "NCT", songName: "lemonade"},
      { id: 7, song: "Simon Says", link: SIMONSAYS, artistName: "NCT", songName: "simon-says"},
      { id: 8, song: "Turn Back Time", link: TURNBACKTIME, artistName: "WAYV", songName: "turn-back-time"},
    ]);

    ///////////////////////////////////////////////////////////////////////////////
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
    /////////////////////////////////////////////////////////////////////////////

    const [ lyric, setLyric ] = useState([
        { id: 1, artistName: "NCT", songName: "boss" },
        { id: 2, artistName: "WAYV", songName: "domino" },
        { id: 3, artistName: "NCT", songName: "cherry-bomb" },
      ]);

    const [ statusMessage, setStatusMessage ] = useState('Loading');

    // const params = useParams();

    useEffect(() => {
        const fetchLyric = async () => {
            setStatusMessage('Loading')
            try {   
                let { data } =  chosenButton && await axios.get(`https://api.lyrics.ovh/v1/${chosenButton.artistName}/${chosenButton.songName}`);
                setLyric(data);
                setStatusMessage('');
            } catch (err) {
                console.warn(err);
                setStatusMessage(`Oops there\'s been an issue! ${err.message}`)
            }
        }
        fetchLyric()
    }, [chosenButton])

   


    /////////////////////////////////////////////////////////////////////////////
    return (
      <>
        <h3 className={"listen-header"} role={"listen-header"}>Listen to some music here!</h3>
        <ul className={"listen-list"}> {renderAudios()} </ul>
        {chosenButton && (
         <div> 
          <section className={"button-section"}>
            <button className="play-button" role="play-button" onClick={() => handlePlay()}>
              Play {chosenButton.song}
            </button>
            <button className="pause-button" role="pause-button" onClick={() => handlePause()}>
              Pause {chosenButton.song}
            </button>
            <button className="stop-button" role="the-stop-button" onClick={() => handleStop()}>
              Stop {chosenButton.song}
            </button>
          </section>
          <div className = "lyrics-div">
            <span className="lyrics-para"> {lyric.lyrics} </span>
          </div>
        </div>
        )}
      </>
    );
}

export default MusicButton
