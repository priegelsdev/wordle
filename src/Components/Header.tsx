// SVGs

const copy = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
    />
  </svg>
);

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

const moon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
    />
  </svg>
);

const sun = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
    />
  </svg>
);

const restart = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
    />
  </svg>
);

type HeaderProps = {
  englishMode: boolean;
  onClick: () => void;
};

export default function Header({ englishMode, onClick }: HeaderProps) {
  return (
    <header className="flex items-center justify-between p-2 sm:p-6 border-solid border-b-2 shadow-lg">
      <div /* div exists only for flex to work properly */></div>
      <div className="flex items-center mr-auto ml-1 sm:-mr-32">
        {copy}
        <h1 className="text-4xl tracking-tighter font-bold font-sans justify-self-start ml-1">
          Wordle
        </h1>
      </div>
      <div className="flex items-center gap-3 mx-2">
        <button onClick={() => location.reload()}>{restart}</button>
        <button
          // since flags are sized a bit differently, we add different gap depending on which flag is shown
          className={`flex items-center ${
            englishMode ? 'gap-0.5' : 'gap-2'
          } rounded-sm font-bold`}
          onClick={onClick}
        >
          {englishMode ? de : en} {englishMode ? 'DE' : 'EN'}
        </button>
        <button>{moon}</button>
      </div>
    </header>
  );
}
