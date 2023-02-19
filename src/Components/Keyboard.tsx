import React, { useEffect, useState } from 'react';

const arrow = (
  <svg
    id="arrow"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="m-auto w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z"
    />
  </svg>
);

const enter = (
  <svg
    id="enter"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 m-auto"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 12.75l6 6 9-13.5"
    />
  </svg>
);

const KEYS = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  arrow,
  enter,
];

type KeyboardProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onEnter: () => void;
  onRemove: (e: React.MouseEvent<HTMLButtonElement>) => void;
  guessedLetters: string[];
  allGuessedLetters: string[];
  quizWord: string;
  englishMode: boolean;
};

export default function Keyboard({
  onClick,
  onEnter,
  onRemove,
  guessedLetters,
  allGuessedLetters,
  quizWord,
  englishMode,
}: KeyboardProps) {
  // KEYS state depending on language
  const [keys, setKeys] = useState<any[]>(KEYS);

  function changeKeyboard() {
    if (!englishMode) {
      setKeys((prevState) => [...prevState, 'ä', 'ö', 'ü']);
    } else if (keys.includes('ä')) {
      setKeys(KEYS);
    }
  }

  useEffect(() => {
    changeKeyboard();
  }, [englishMode]);

  // function to run onClick passed down to keyElements
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    const id = e.currentTarget.id;

    if (id === 'enter' || id === '27') {
      onEnter();
    } else if (id === 'arrow' || id === '26') {
      onRemove(e);
    } else {
      onClick(e);
    }
  }

  const keyElements = keys.map((key, index) => (
    <button
      id={`${index}`}
      key={index}
      className={`aspect-square w-14 border-solid border-2 uppercase font-bold 
        ${
          allGuessedLetters.includes(key.toString()) &&
          quizWord.split('').includes(key.toString()) &&
          !allGuessedLetters.includes(key + 'correct')
            ? 'bg-letter-yellow text-white'
            : ''
        }
        ${
          allGuessedLetters.includes(key + 'correct')
            ? 'bg-letter-green text-white'
            : ''
        }
        ${
          allGuessedLetters.includes(key.toString()) &&
          !quizWord.split('').includes(key.toString())
            ? 'bg-asphalt-gray text-white'
            : ''
        }`}
      onClick={handleClick}
    >
      {key}
    </button>
  ));

  return (
    <div className="w-screen grid grid-rows-4 grid-cols-Keyboard gap-2 justify-center justify-items-center">
      {keyElements}
    </div>
  );
}
