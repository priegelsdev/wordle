const de = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1350 900"
    width="40"
    height="20"
  >
    <rect width="1350" height="900" fill="#d00" />
    <path d="M 1350,0 H 0 V 300 H 900 z" fill="#000" />
    <path d="M 900,300 H 1350 V 600 H 450 z" fill="#fff" />
    <path d="M 450,600 H 0 V 900 z" fill="#ffce00" />
    <rect x="375" y="150" width="600" height="600" fill="#d00" />
    <rect x="615" y="250" width="120" height="400" fill="#fff" />
    <rect x="475" y="390" width="400" height="120" fill="#fff" />
  </svg>
);

const en = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 1300 650"
    width="35"
    height="20"
  >
    <defs>
      <polygon
        id="pt"
        points="-0.1624598481164531,0 0,-0.5 0.1624598481164531,0"
        transform="scale(0.0616)"
        fill="#FFF"
      />
      <g id="star">
        <use xlinkHref="#pt" transform="rotate(-144)" />
        <use xlinkHref="#pt" transform="rotate(-72)" />
        <use xlinkHref="#pt" />
        <use xlinkHref="#pt" transform="rotate(72)" />
        <use xlinkHref="#pt" transform="rotate(144)" />
      </g>
      <g id="s5">
        <use xlinkHref="#star" x="-0.252" />
        <use xlinkHref="#star" x="-0.126" />
        <use xlinkHref="#star" />
        <use xlinkHref="#star" x="0.126" />
        <use xlinkHref="#star" x="0.252" />
      </g>
      <g id="s6">
        <use xlinkHref="#s5" x="-0.063" />
        <use xlinkHref="#star" x="0.315" />
      </g>
      <g id="x4">
        <use xlinkHref="#s6" />
        <use xlinkHref="#s5" y="0.054" />
        <use xlinkHref="#s6" y="0.108" />
        <use xlinkHref="#s5" y="0.162" />
      </g>
      <g id="u">
        <use xlinkHref="#x4" y="-0.216" />
        <use xlinkHref="#x4" />
        <use xlinkHref="#s6" y="0.216" />
      </g>
      <rect id="stripe" width="1300" height="50" fill="#B22234" />
    </defs>
    <rect width="1300" height="650" fill="#FFF" />
    <use xlinkHref="#stripe" />
    <use xlinkHref="#stripe" y="100" />
    <use xlinkHref="#stripe" y="200" />
    <use xlinkHref="#stripe" y="300" />
    <use xlinkHref="#stripe" y="400" />
    <use xlinkHref="#stripe" y="500" />
    <use xlinkHref="#stripe" y="600" />
    <rect width="494" height="350" fill="#3C3B6E" />
    <use xlinkHref="#u" transform="translate(247,175) scale(650)" />
    <svg viewBox="0 0 60 30" width="1300" height="650">
      <clipPath id="t">
        <path d="M30,15L60,30V15H0V30H30z" />
      </clipPath>
      <clipPath id="uk">
        <path d="M0,30H60V0z" />
      </clipPath>
      <g clip-path="url(#uk)">
        <path d="M0,0 v30 h60 v-30 z" fill="#00247d" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6" />
        <path
          d="M0,30 L30,15 L60,30"
          clip-path="url(#t)"
          fill="none"
          stroke="#cf142b"
          stroke-width="4"
        />
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10" />
        <path d="M30,0 v30 M0,15 h60" stroke="#cf142b" stroke-width="6" />
      </g>
    </svg>
  </svg>
);

type HeaderProps = {
  englishMode: boolean;
  onClick: () => void;
};

export default function Header({ englishMode, onClick }: HeaderProps) {
  return (
    <header className="flex justify-between p-6 border-solid border-b-2 shadow-lg">
      <div className="w-32"></div>
      <h1 className="text-4xl font-bold">Wordle</h1>
      <div className="flex items-center">
        <button
          // since flags are sized a bit differently, we add different gap depending on which flag is shown
          className={`flex items-center ${
            englishMode ? 'gap-0.5' : 'gap-2'
          } mr-4 rounded-sm font-bold`}
          onClick={onClick}
        >
          {englishMode ? de : en} {englishMode ? 'DE' : 'EN'}
        </button>
        <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
          Dark Theme
        </button>
      </div>
    </header>
  );
}
