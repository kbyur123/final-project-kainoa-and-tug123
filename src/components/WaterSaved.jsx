import { useState } from "react"; 

function WaterSaved() {
  const [water, setWater] = useState(0);

  return (
    <div className="m-6 border border-black p-5 w-64 text-center">
      <h2 className="text-xl font-bold mb-2">
        Water Saved
      </h2>

      <h1 className="text-3xl font-bold mb-3">
        {water} L 💧
      </h1>

      <button
        onClick={() => setWater(water + 2700)}
        className="border border-black px-3 py-1 hover:bg-gray-200"
      >
        Save Water
      </button>
    </div>
  );
}

export default WaterSaved;
