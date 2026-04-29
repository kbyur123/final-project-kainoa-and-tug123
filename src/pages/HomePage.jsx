import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center border border-black">

      
      <h1 className="text-4xl font-bold mb-10 text-center">
        Home Page
      </h1>

      
      <div className="flex flex-col gap-4 items-center">

        <button
          onClick={() => navigate("/donut")}
          className="border border-black px-6 py-3 text-lg hover:bg-gray-200 w-64"
        >
          Donate Page 
        </button>

        <button
          onClick={() => navigate("/water")}
          className="border border-black px-6 py-3 text-lg hover:bg-gray-200 w-64"
        >
          Water Saved 
        </button>

        <button
          onClick={() => navigate("/inventory")}
          className="border border-black px-6 py-3 text-lg hover:bg-gray-200 w-64"
        >
          Inventory 
        </button>

      </div>
    </div>
  );
}

export default HomePage;