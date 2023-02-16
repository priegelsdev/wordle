type RowsContainerProps = {
  quizWord: string;
};

export default function RowsContainer({ quizWord }: RowsContainerProps) {
  const wordArr = quizWord.split('');

  // letters mapped out and rendered as boxes wihtout any value; value is stored in the id to later on..
  // ..see if value entered matches id value
  // likely needed to think through again as logic gets added to compare entered value and display diff colors

  const letterElements = wordArr.map((letter, index) => (
    <div
      key={index}
      id={letter}
      className="aspect-square w-14 bg-asphalt-gray text-white font-bold flex justify-center items-center"
    ></div>
  ));

  return (
    <>
      <div className="flex gap-1 mb-1">{letterElements}</div>
      <div className="flex gap-1 mb-1">{letterElements}</div>
      <div className="flex gap-1 mb-1">{letterElements}</div>
      <div className="flex gap-1 mb-1">{letterElements}</div>
      <div className="flex gap-1 mb-1">{letterElements}</div>
      <div className="flex gap-1 mb-1">{letterElements}</div>
    </>
  );
}
