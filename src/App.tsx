export default function App() {
  return (
    <main className="w-screen h-screen flex flex-col justify-between">
      <header className="flex justify-between p-6 border-solid border-b-2 shadow-lg">
        <div className="w-32"></div>
        <h1 className="text-3xl underline">WORDLE</h1>
        <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
          Dark Theme
        </button>
      </header>

      <div className="m-auto lg text-center">
        <div className="flex gap-1">
          <div className="px-4 py-3 border-solid border-2 flex justify-center items-center">
            W
          </div>
          <div className="px-4 py-3 border-solid border-2 flex justify-center items-center">
            O
          </div>
          <div className="px-4 py-3 border-solid border-2 flex justify-center items-center">
            R
          </div>
          <div className="px-4 py-3 border-solid border-2 flex justify-center items-center">
            D
          </div>
          <div className="px-4 py-3 border-solid border-2 flex justify-center items-center">
            0
          </div>
        </div>
        <div>Word1</div>
        <div>Word2</div>
        <div>Word3</div>
        <div>Word4</div>
        <div>Word5</div>
      </div>

      <footer className="p-5 text-center bg-gray-600 text-white">info</footer>
    </main>
  );
}
