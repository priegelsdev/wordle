type RowsContainerProps = {
  quizWord: string;
};

export default function RowsContainer({ quizWord }: RowsContainerProps) {
  const wordArr = quizWord.split('');
  console.log(wordArr);

  return (
    <>
      <div className="flex gap-1">
        <div className="aspect-square w-14 bg-asphalt-gray text-white font-bold flex justify-center items-center"></div>
        <div className="aspect-square w-14 bg-asphalt-gray text-white font-bold flex justify-center items-center">
          O
        </div>
        <div className="aspect-square w-14 bg-asphalt-gray text-white font-bold flex justify-center items-center">
          R
        </div>
        <div className="aspect-square w-14 bg-asphalt-gray text-white font-bold flex justify-center items-center">
          D
        </div>
        <div className="aspect-square w-14 bg-asphalt-gray text-white font-bold flex justify-center items-center">
          0
        </div>
      </div>
      <div>Word1</div>
      <div>Word2</div>
      <div>Word3</div>
      <div>Word4</div>
      <div>Word5</div>
    </>
  );
}
