import { useNavigate } from "react-router-dom";
import FilterBox from "../components/FilterBox";
import PictureCard from "../components/PictureCard";
import TitleBox from "../components/TitleBox";

function Inventory() {
  const navigate = useNavigate();

  const items = [
    {
      id: 1,
      title: "Bottle",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Cup",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Straw",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      title: "Jar",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      title: "Box",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      title: "Pack",
      image: "https://via.placeholder.com/150",
    },
  ];

  const handleFilterClick = (filter) => {
    if (filter === "Home Page") navigate("/");
    if (filter === "Water Saved Page") navigate("/watersaved");
    if (filter === "Main Page") navigate("/main");
  };

  return (
    <div className="min-h-screen bg-white px-6 py-8">
      <h1 className="mb-6 text-center text-4xl font-bold">Inventory</h1>

      <div className="mx-auto flex max-w-3xl flex-col items-center rounded-xl border-2 border-black p-8">
        <TitleBox text="Inventory" />

        <div className="mt-8 grid grid-cols-3 gap-8">
          {items.map((item) => (
            <PictureCard
              key={item.id}
              image={item.image}
              title={item.title}
            />
          ))}
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <FilterBox
          title="Filter"
          filters={["Home Page", "Water Saved Page", "Main Page"]}
          onFilterClick={handleFilterClick}
        />
      </div>
    </div>
  );
}

export default Inventory;


