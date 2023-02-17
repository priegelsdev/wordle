import React, { useState, useEffect } from 'react';

import Keyboard from './Components/Keyboard';
import RowsContainer from './Components/RowsContainer';
import words from './words.json';

export default function App() {
  // state to hold random word from words.json
  const [quizWord, setQuizWord] = useState<string>(
    words[Math.floor(Math.random() * words.length)]
  );
  console.log(quizWord);
  // state to determine active row in which to guess for letters
  const [activeRow, setActiveRow] = useState<number>(0);
  // state to hold ENTERED, but not yet GUESSED letters
  const [enteredLetters, setEnteredLetters] = useState<string[]>([]);
  // state to hold guessedLetters of lastly active row
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  // copy of guessedLetters that does not reset and holds every letter that has been guessed
  const [allGuessedLetters, setAllGuessedLetters] = useState<string[]>([]);

  // display input letters on screen
  useEffect(() => {
    const row = document.getElementById(`row-${activeRow}`);
    if (row) {
      Array.from(row.childNodes as NodeListOf<HTMLElement>).forEach(
        (child: HTMLElement, index: number) => {
          if (enteredLetters[index]) {
            child.innerText = enteredLetters[index].toUpperCase();
          } else {
            child.innerText = '';
          }
        }
      );
    }
  }, [enteredLetters]);

  // check if guessedLetters include quizWord letters on enter click
  useEffect(() => {
    const row = document.getElementById(`row-${activeRow - 1}`);
    if (row) {
      Array.from(row.childNodes as NodeListOf<HTMLElement>).forEach(
        (child: HTMLElement, index: number) => {
          // check how many times the entered letter is in the quiz word
          const amountLetterInQuizWord = quizWord
            .split('')
            .reduce((acc, val) => {
              if (val === guessedLetters[index]) {
                acc++;
              }
              return acc;
            }, 0);

          const letterToCheck = guessedLetters[index];

          if (guessedLetters[index] === child.id) {
            // change bg color of box if guessed letter is correct or in wrong position
            child.style.backgroundColor = '#6BAA64';
          } else if (
            guessedLetters[index] != child.id &&
            quizWord.split('').includes(guessedLetters[index])
          ) {
            // LOGIC:
            // if the letter is included in quizWord, determine how many times (var count) and then loop through the row again;
            // as long as count is > 0, loop through the row again and for each time the letter is found, count--
            // to prioritize correct letters, we loop to ONLY check those first and THEN move on to incorrect placed ones

            let count = amountLetterInQuizWord;

            if (count > 0) {
              Array.from(row.childNodes as NodeListOf<HTMLElement>).forEach(
                (child: HTMLElement, newIndex: number) => {
                  if (
                    letterToCheck === guessedLetters[newIndex] &&
                    letterToCheck === child.id
                  ) {
                    count--;
                  }
                }
              );

              Array.from(row.childNodes as NodeListOf<HTMLElement>).forEach(
                (child: HTMLElement, newIndex: number) => {
                  if (
                    letterToCheck != child.id &&
                    letterToCheck === guessedLetters[newIndex] &&
                    quizWord.split('').includes(letterToCheck) &&
                    count > 0
                  ) {
                    child.style.backgroundColor = '#C9B457';
                    count--;
                  }
                }
              );
            }
          }
        }
      );
    }
  }, [guessedLetters]);

  // function to add letter to active row
  function addEnteredLetter(e: React.MouseEvent<HTMLButtonElement>) {
    const target = e.target as HTMLElement;

    if (target.innerText && enteredLetters.length < 5) {
      setEnteredLetters((prevState) => [
        ...prevState,
        target.innerText.toLowerCase(),
      ]);
    }
  }

  // function to remove entered letter from last index of active row
  function removeEnteredLetter(e: React.MouseEvent<HTMLButtonElement>) {
    const target = e.target as HTMLElement;

    setEnteredLetters((prevState) => prevState.slice(0, -1));
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
      setActiveRow((prevState) => prevState + 1);
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
          onRemove={removeEnteredLetter}
          guessedLetters={guessedLetters}
          allGuessedLetters={allGuessedLetters}
          quizWord={quizWord}
        />
      </div>

      <footer className="p-5 text-center bg-gray-600 text-white">footer</footer>
    </main>
  );
}
