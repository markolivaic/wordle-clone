import React, { useContext } from "react";
import { AppContext } from "../App";

const GameOver = () => {
  const { gameOver, setGameOver, correctWord, currAttempt } =
    useContext(AppContext);
  return (
    <div className="gameOver0">
      <h3>{gameOver.guessedWord ? "You Won" : "You Failed"}</h3>
      <h1>Correct: {correctWord}</h1>
      {gameOver.guessedWord && (
        <h3>You guessed in {currAttempt.attempt} attempts</h3>
      )}
    </div>
  );
};

export default GameOver;
