import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';

import Keyboard from './Components/Keyboard';
import RowsContainer from './Components/RowsContainer';
import Header from './Components/Header';
import words from './words.json';
import worte from './worte.json';

// we create type for language options
type LanguageOption = 'en' | 'de';

export default function App() {
  // color themeContext
  const { theme } = useContext(ThemeContext);

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

  const [language, setLanguage] = useState<LanguageOption>(
    (localStorage.getItem('language') as LanguageOption) || 'en'
  );
  // determine if winner or loser
  const isWinner = guessedLetters.join('') == quizWord ? true : false;
  const isLoser = activeRow === 6 && !isWinner ? true : false;

  // reset game and change quizWord depending on language state
  useEffect(() => {
    setQuizWord(
      language === 'en'
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
            child.className = `aspect-square w-14 border-solid border-2 ${
              theme === 'light'
                ? 'border-gray-300'
                : 'border-gray-600 text-white'
            } font-bold flex justify-center items-center`;
          }
        );
      }
    }

    localStorage.setItem('language', language);
  }, [language]);

  // display input letters on screen
  useEffect(() => {
    const row = document.getElementById(`row-${activeRow}`);
    if (row) {
      Array.from(row.childNodes as NodeListOf<HTMLElement>).forEach(
        (child: HTMLElement, index: number) => {
          if (enteredLetters[index]) {
            child.innerText = enteredLetters[index].toUpperCase();
            child.classList.add('border-gray-500');
          } else {
            child.innerText = '';
            child.classList.remove('border-gray-500');
          }
        }
      );
    }
  }, [enteredLetters]);

  // check if guessedLetters include quizWord letters on enter click
  // apply styling to input letters
  useEffect(() => {
    for (let i = 0; i < activeRow; i++) {
      const row = document.getElementById(`row-${i}`);
      if (row) {
        Array.from(row.childNodes as NodeListOf<HTMLElement>).forEach(
          (child: HTMLElement, index: number) => {
            // check how many times the entered letter is in the quiz word
            const amountLetterInQuizWord = quizWord
              .split('')
              .reduce((acc, val) => {
                if (val === child.innerText.toLowerCase()) {
                  acc++;
                }
                return acc;
              }, 0);

            const letterToCheck = guessedLetters[index];
            child.classList.add('text-white');
            child.classList.remove('border-2');

            if (child.innerText.toLowerCase() === child.id) {
              // change bg color of box if guessed letter is correct or in wrong position
              child.classList.add('bg-letter-green');
            } else if (
              child.innerText.toLowerCase() != child.id &&
              quizWord.split('').includes(child.innerText.toLowerCase())
            ) {
              child.classList.add('bg-letter-yellow');
            } else {
              child.classList.add('bg-asphalt-gray');
            }
          }
        );
      }
    }
  }, [activeRow, theme]);

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
  // has to include a word from english word list in english mode, from german word list in german mode
  function addGuessedLetters() {
    if (
      (language === 'en' && words.includes(enteredLetters.join(''))) ||
      (language === 'de' && worte.includes(enteredLetters.join('')))
    ) {
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
    } else {
      document
        .getElementById(`row-${activeRow}`)
        ?.classList.add('animate-row-shake');
      setTimeout(() => {
        document
          .getElementById(`row-${activeRow}`)
          ?.classList.remove('animate-row-shake');
      }, 800);
    }
  }

  // function to change language
  function changeLanguage() {
    setLanguage(language === 'en' ? 'de' : 'en');
  }

  return (
    <main
      className={`relative w-screen h-screen flex flex-col font-mono ${
        theme === 'dark' ? 'bg-gray-900' : ''
      }`}
    >
      <Header language={language} onClick={changeLanguage} />

      {isWinner && (
        <div className="mx-auto mt-4 -mb-4 text-center underline decoration-green-500">
          <h3
            className={`font-bold text-lg ${
              theme === 'dark' ? 'text-white' : ''
            }`}
          >
            You won! Congrats!
          </h3>
        </div>
      )}
      {isLoser && (
        <div className="mx-auto mt-4 -mb-4 text-center">
          <h3
            className={`font-bold text-lg underline decoration-red-500 ${
              theme === 'dark' ? 'text-white' : ''
            }`}
          >
            {quizWord.toUpperCase()}
          </h3>
          <h3
            className={`font-bold text-lg ${
              theme === 'dark' ? 'text-white' : ''
            }`}
          >
            Nice try!
          </h3>
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
          language={language}
        />
      </div>
    </main>
  );
}
