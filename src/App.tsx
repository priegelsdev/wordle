import React, { useState } from 'react';

import Keyboard from './Components/Keyboard';
import RowsContainer from './Components/RowsContainer';
import words from './words.json';

export default function App() {
  // TO DO
  // add activeRow state to determine which row letters get entered into
  // add guessedLetters array state to hold guessed letters

  // state to hold random word from words.json
  const [quizWord, setQuizWord] = useState<string>(
    words[Math.floor(Math.random() * words.length)]
  );
  // state to determine active row in which to guess for letters
  const [activeRow, setActiveRow] = useState<number>(0);
  // state to hold guessedLetters
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  // function to add letter to active row
  function addGuessedLetter() {
    console.log('test');
  }

  return (
    <main className="w-screen h-screen flex flex-col justify-between">
      <header className="flex justify-between p-6 border-solid border-b-2 shadow-lg">
        <div className="w-32"></div>
        <h1 className="text-3xl underline">WORDLE</h1>
        <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
          Dark Theme
        </button>
      </header>

      <div className="m-auto mb-0 lg text-center">
        <RowsContainer quizWord={quizWord} />
      </div>

      <div className="m-auto">
        <Keyboard onClick={addGuessedLetter} />
      </div>

      <footer className="p-5 text-center bg-gray-600 text-white">footer</footer>
    </main>
  );
}
