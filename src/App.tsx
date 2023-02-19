import React, { useState, useEffect } from 'react';

import Keyboard from './Components/Keyboard';
import RowsContainer from './Components/RowsContainer';
import Header from './Components/Header';
import words from './words.json';
import worte from './worte.json';

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

  const [englishMode, setEnglishMode] = useState<boolean>(true);
  console.log(allGuessedLetters);
  // determine if winner or loser
  const isWinner = guessedLetters.join('') == quizWord ? true : false;
  const isLoser = activeRow === 6 && !isWinner ? true : false;

  // reset game and change quizWord depending on language state
  useEffect(() => {
    setQuizWord(
      englishMode
        ? words[Math.floor(Math.random() * words.length)]
        : worte[Math.floor(Math.random() * worte.length)]
    );
    setGuessedLetters([]);
    setActiveRow(0);
    setAllGuessedLetters([]);
    setEnteredLetters([]);

    for (let i = 0; i < 6; i++) {
      const row = document.getElementById(`row-${i}`);
      if (row) {
        Array.from(row.childNodes as NodeListOf<HTMLElement>).forEach(
          (child: HTMLElement, index: number) => {
            child.innerText = '';
            child.className =
              'aspect-square w-14 border-solid border-2 border-gray-300 font-bold flex justify-center items-center';
          }
        );
      }
    }
  }, [englishMode]);

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
          child.classList.add('text-white');
          child.classList.remove('border-2');

          if (guessedLetters[index] === child.id) {
            // change bg color of box if guessed letter is correct or in wrong position
            child.classList.add('bg-letter-green');
          } else if (
            guessedLetters[index] != child.id &&
            quizWord.split('').includes(guessedLetters[index])
          ) {
            // LOGIC:
            // if the letter is included in quizWord, determine how many times (var count) and then loop through the row again;
            // as long as count is > 0, loop through the row again and for each time the letter is found, count--
            // to prioritize correct letters, we loop to ONLY check those first and THEN move on to incorrect placed ones

            let count = amountLetterInQuizWord;
            child.classList.add('bg-asphalt-gray');

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
                    child.classList.add('bg-letter-yellow');
                    count--;
                  }
                }
              );
            }
          } else {
            child.classList.add('bg-asphalt-gray');
          }
        }
      );
    }
  }, [guessedLetters]);

  // function to add letter to active row
  function addEnteredLetter(e: React.MouseEvent<HTMLButtonElement>) {
    const target = e.target as HTMLElement;

    if (
      target.innerText &&
      enteredLetters.length < 5 &&
      !isWinner &&
      !isLoser
    ) {
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
    if (enteredLetters.length === 5) {
      setGuessedLetters(enteredLetters);
      enteredLetters.forEach((letter) => {
        if (!allGuessedLetters.includes(letter)) {
          setAllGuessedLetters((prevState) => [...prevState, letter]);
        }
        if (
          quizWord.split('').indexOf(letter) === enteredLetters.indexOf(letter)
        ) {
          setAllGuessedLetters((prevState) => [
            ...prevState,
            letter + 'correct',
          ]);
        }
      });

      setEnteredLetters([]);
      setActiveRow((prevState) => prevState + 1);
    }
  }

  // function to change language
  function changeLanguage() {
    console.log('change');
    setEnglishMode((prevState) => !prevState);
  }

  return (
    <main className="relative w-screen h-screen flex flex-col font-mono">
      <Header englishMode={englishMode} onClick={changeLanguage} />

      {isWinner && (
        <div className="mx-auto mt-4 -mb-4 text-center underline decoration-green-500">
          <h3 className="font-bold text-lg">You won! Congrats!</h3>
        </div>
      )}
      {isLoser && (
        <div className="mx-auto mt-4 -mb-4 text-center">
          <h3 className="font-bold underline decoration-red-500">
            {quizWord.toUpperCase()}
          </h3>
          <h3 className="font-bold">Nice try!</h3>
        </div>
      )}

      <div className="mx-auto my-4 p-4 lg text-center text-3xl">
        <RowsContainer
          quizWord={quizWord}
          enteredLetters={enteredLetters}
          activeRow={activeRow}
        />
      </div>

      <div className="-my-4 mx-auto text-xl">
        <Keyboard
          onClick={addEnteredLetter}
          onEnter={addGuessedLetters}
          onRemove={removeEnteredLetter}
          guessedLetters={guessedLetters}
          allGuessedLetters={allGuessedLetters}
          quizWord={quizWord}
          englishMode={englishMode}
        />
      </div>
    </main>
  );
}
