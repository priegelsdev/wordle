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
  // state to hold guessedLetters of lastly active row
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  console.log('guessed Letters state', guessedLetters);
  // copy of guessedLetters that does not reset and holds every letter that has been guessed
  const [allGuessedLetters, setAllGuessedLetters] = useState<string[]>([]);
  console.log('all guessed letters', allGuessedLetters);

  // TODO: use effect to check guessed letters and quiz array and figure out logic to display
  // correct letters on screen

  // check if guessedLetters include quizWord letters on enter click
  useEffect(() => {
    quizWord.split('').map((letter) => {
      if (guessedLetters.includes(letter)) {
        console.log(letter + ' included!');
      }
    });
  }, [guessedLetters]);

  // display input letters on screen
  useEffect(() => {
    const row = document.getElementById(`row-${activeRow}`);
    if (row) {
      Array.from(row.childNodes as NodeListOf<HTMLElement>).forEach(
        (child: HTMLElement, index: number) => {
          if (enteredLetters[index]) {
            child.innerText = enteredLetters[index];
          }
        }
      );
    }
  });

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

  // function to lock and compare entered letters to quizWord letters and add to guessed array
  function addGuessedLetters() {
    console.log('entered Letters', enteredLetters);
    if (enteredLetters.length === 5) {
      setGuessedLetters(enteredLetters);
      enteredLetters.forEach((letter) =>
        setAllGuessedLetters((prevState) => [...prevState, letter])
      );

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
        <RowsContainer
          quizWord={quizWord}
          enteredLetters={enteredLetters}
          activeRow={activeRow}
        />
      </div>

      <div className="m-auto">
        <Keyboard
          onClick={addEnteredLetter}
          onEnter={addGuessedLetters}
          guessedLetters={guessedLetters}
          allGuessedLetters={allGuessedLetters}
          quizWord={quizWord}
        />
      </div>

      <footer className="p-5 text-center bg-gray-600 text-white">footer</footer>
    </main>
  );
}
