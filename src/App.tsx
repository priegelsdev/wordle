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
        <div>Word_</div>
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
