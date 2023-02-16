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
];

const keyElements = KEYS.map((key) => (
  <button className="aspect-square w-14 border-solid border-2 uppercase font-bold">
    {key}
  </button>
));

export default function Keyboard() {
  return (
    <div className="w-screen grid grid-rows-3 grid-cols-Keyboard gap-2 justify-center justify-items-center">
      {keyElements}
    </div>
  );
}
