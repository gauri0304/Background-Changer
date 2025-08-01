import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen duration-200 flex flex-col justify-center items-center gap-4" style={{ backgroundColor: color }}>
      <h1 className="text-white text-3xl font-bold">Background Color: {color}</h1>
      <div className="flex gap-3">
        <button onClick={() => setColor("tomato")} className="px-4 py-2 bg-red-500 rounded-lg text-white font-semibold">Tomato</button>
        <button onClick={() => setColor("skyblue")} className="px-4 py-2 bg-sky-500 rounded-lg text-white font-semibold">Sky Blue</button>
        <button onClick={() => setColor("seagreen")} className="px-4 py-2 bg-green-600 rounded-lg text-white font-semibold">Green</button>
        <button onClick={() => setColor("yellow")} className="px-4 py-2 bg-yellow-300 rounded-lg text-white font-semibold">Yellow</button>
      </div>
    </div>
  );
}

export default App;
