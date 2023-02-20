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
  'q',
  'w',
  'e',
  'r',
  't',
  'y',
  'u',
  'i',
  'o',
  'p',
  'a',
  's',
  'd',
  'f',
  'g',
  'h',
  'q',
  'k',
  'l',
  enter,
  'z',
  'x',
  'c',
  'v',
  'b',
  'n',
  'm',
  arrow,
  'ä',
  'ö',
  'ü',
];

type KeyboardProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onEnter: () => void;
  onRemove: (e: React.MouseEvent<HTMLButtonElement>) => void;
  guessedLetters: string[];
  allGuessedLetters: string[];
  quizWord: string;
  language: string;
};

export default function Keyboard({
  onClick,
  onEnter,
  onRemove,
  guessedLetters,
  allGuessedLetters,
  quizWord,
  language,
}: KeyboardProps) {
  // function to run onClick passed down to keyElements
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    const id = e.currentTarget.id;
    console.log(e.currentTarget.id);
    if (id === 'enter ') {
      onEnter();
    } else if (id === ' arrow') {
      onRemove(e);
    } else {
      onClick(e);
    }
  }

  const keyElements = KEYS.map((key, index) => (
    <button
      id={`${key == enter ? 'enter' : ''} ${key == arrow ? 'arrow' : ''}`}
      key={index}
      className={`w-8 md:w-8 py-4 uppercase rounded bg-key-gray font-bold 
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
            ? 'bg-key-wrong text-white'
            : ''
        }

        ${key === arrow || key === enter ? 'w-12 md:w-12' : ''}

        ${key === '' ? 'bg-transparent' : ''}`}
      onClick={handleClick}
    >
      {key}
    </button>
  ));

  const firstRow = (
    <div className="flex justify-center gap-1">{keyElements.slice(0, 10)}</div>
  );

  const secondRow = (
    <div className="flex justify-center gap-1">{keyElements.slice(10, 19)}</div>
  );

  const thirdRow = (
    <div className="flex justify-center gap-1">{keyElements.slice(19, 28)}</div>
  );

  const optionalRow = (
    <div className="flex justify-center gap-1">{keyElements.slice(28, 31)}</div>
  );

  return (
    <div className="w-screen w-max-10/12 flex flex-col justify-center gap-1">
      {firstRow}
      {secondRow}
      {thirdRow}
      {language == 'de' && optionalRow}
    </div>
  );
}
