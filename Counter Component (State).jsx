import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 text-center">
      <h2 className="text-xl font-bold mb-2">Counter: {count}</h2>
      <div className="flex justify-center space-x-2">
        <button 
          className="px-3 py-1 bg-blue-500 text-white rounded" 
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button 
          className="px-3 py-1 bg-gray-500 text-white rounded" 
          onClick={() => setCount(0)}
        >
          Reset
        </button>
        <button 
          className={`px-3 py-1 text-white rounded ${count === 0 ? "bg-gray-300" : "bg-red-500"}`} 
          onClick={() => setCount(count - 1)} 
          disabled={count === 0}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="p-6">
      <Counter />
    </div>
  );
}
