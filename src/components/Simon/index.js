var sound1 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
var sound2 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
var sound3 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
var sound4 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");
var soundBoard = [sound1, sound2, sound3, sound4];

import "./index.css";
import React, { useState, useEffect } from "react";
import ColorCard from "./ColorCard";
import timeout from "./util";

const Simon = () => {
  const [isOn, setIsOn] = useState(false);

  const colorList = ["purple", "pink", "mauve", "blue"];

  const initPlay = {
    isDisplay: false, // start button is visible
    colors: [],
    score: 0,
    userPlay: false,
    userColors: [],
  };

  const [play, setPlay] = useState(initPlay);
  const [flashColor, setFlashColor] = useState("");

  function startHandle() {
    setIsOn(true);
  }

  useEffect(() => {
    if (isOn) {
      // if start button is clicked set score display to true so it is visible
    setPlay({ ...initPlay, isDisplay: true });
    } else {
      setPlay(initPlay);
    }
  }, [isOn]);

  // if start button is clicked and start button is not visible 
  useEffect(() => {
    if (isOn && play.isDisplay) {
      // pick random color
      let newColor = colorList[Math.floor(Math.random() * 4)];


      const copyColors = [...play.colors]; //empty array at start of game
      copyColors.push(newColor); //push the random color to the array

      //set color array to the new array with a new color pushed into it
      setPlay({ ...play, colors: copyColors }); 
    }
  }, [isOn, play.isDisplay]);

  // play.colors.length =0 => Boolen(play.colors.length) = false
  useEffect(() => {
    // colors has been set to copy colors which has a new color pushed to it so play.colors.length =1 now => Boolen(play.colors.length) = true
    if (isOn && play.isDisplay && play.colors.length) {
      displayColors();
    }
  }, [isOn, play.isDisplay, play.colors.length]);

  async function displayColors() {
    await timeout(1000);
    for (let i = 0; i < play.colors.length; i++) {
      setFlashColor(play.colors[i]);
      await timeout(1000);
      setFlashColor("");
      await timeout(1000);

      if (i === play.colors.length - 1 ) {
        const copyColors = [...play.colors];

        setPlay({
          ...play,
          isDisplay: false,
          userPlay: true,
          userColors: copyColors.reverse(),
        });
        
      }
      

    }
  }


  async function cardClickHandle(color) {
    if (!play.isDisplay && play.userPlay) {
      const copyUserColors = [...play.userColors];
      const lastColor = copyUserColors.pop();
      setFlashColor(color);

      if (color === lastColor) {
        if (copyUserColors.length) {
          setPlay({ ...play, userColors: copyUserColors });
        } else {
          await timeout(1000);
          setPlay({
            ...play,
            isDisplay: true,
            userPlay: false,
            score: play.colors.length,
            userColors: [],
          });
        }
      } else {
        await timeout(1000);
        setPlay({ ...initPlay, score: play.colors.length });
      }
      await timeout(1000);
      setFlashColor("");
    }
  }

  function closeHandle() {
    setIsOn(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="cardWrapper">
          {colorList &&
            colorList.map((v) => (
              <ColorCard
                onClick={() => {
                  cardClickHandle(v);
                }}
                flash={flashColor === v}
                color={v}
              ></ColorCard>
            ))}
        </div>

        {isOn && !play.isDisplay && !play.userPlay && play.score && (
          <div className="lost">
            <div>Final Score: {play.score}</div>
            <button className="closeButton" onClick={closeHandle}>Close</button>
          </div>
        )}
        {!isOn && !play.score && (
          <button onClick={startHandle} className="startButton">
            Start
          </button>
        )}
        {isOn && (play.isDisplay || play.userPlay) && (
          <div className="score">{play.score}</div>
        )}
      </header>
    </div>
  );
};

export default Simon;

// beware first colour does not flash on second round
