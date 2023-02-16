type RowsContainerProps = {
  quizWord: string;
  enteredLetters: string[];
  activeRow: number;
};

export default function RowsContainer({
  quizWord,
  enteredLetters,
  activeRow,
}: RowsContainerProps) {
  const wordArr = quizWord.split('');

  // letters mapped out and rendered as boxes wihtout any value; value is stored in the id to later on..
  // ..see if value entered matches id value
  // likely needed to think through again as logic gets added to compare entered value and display diff colors

  // if active row is row id, then render out letters in that row
  // for each prior row, create copy of guessed letters and fill out accordingly

  const letterElements = wordArr.map((letter, index) => (
    <div
      key={index}
      id={letter}
      className="aspect-square w-14 bg-asphalt-gray text-white font-bold flex justify-center items-center"
    ></div>
  ));

  const rowElements = new Array(6).fill(0).map((row, index) => (
    <div key={index} id={`row-${index}`} className="flex gap-1 mb-1">
      {letterElements}
    </div>
  ));

  return <>{rowElements}</>;
}
