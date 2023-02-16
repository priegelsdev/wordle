import React, { useState, useEffect } from 'react';

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
  console.log(quizWord);
  // state to determine active row in which to guess for letters
  const [activeRow, setActiveRow] = useState<number>(0);
  // state to hold ENTERED, but not yet GUESSED letters
  const [enteredLetters, setEnteredLetters] = useState<string[]>([]);
  console.log('entered Letters state', enteredLetters);
  // state to hold guessedLetters
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  console.log('guessed Letters state', guessedLetters);

  // TODO: use effect to check guessed letters and quiz array and figure out logic to display
  // correct letters on screen

  useEffect(() => {
    quizWord.split('').map((letter) => {
      if (guessedLetters.includes(letter)) {
        console.log(letter + ' included!');
      }
    });
  }, [guessedLetters]);

  // function to add letter to active row
  function addEnteredLetter(e: React.MouseEvent<HTMLButtonElement>) {
    const target = e.target as HTMLElement;

    if (target.innerText) {
      setEnteredLetters((prevState) => [
        ...prevState,
        target.innerText.toLowerCase(),
      ]);
    } else if (
      target.id === 'enter' ||
      target.id === 'arrow' ||
      target.id === '26' ||
      target.id === '27'
    ) {
      console.log(target.id);
    }
  }

  function addGuessedLetters() {
    console.log('entered Letters', enteredLetters);
    if (enteredLetters.length === 5) {
      setGuessedLetters(enteredLetters);
      setEnteredLetters([]);
    }
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
        <Keyboard onClick={addEnteredLetter} onEnter={addGuessedLetters} />
      </div>

      <footer className="p-5 text-center bg-gray-600 text-white">footer</footer>
    </main>
  );
}
