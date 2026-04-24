import { useNavigate } from "react-router-dom";
import NavButtons from "../components/NavButtons";
import ImageBox from "../components/ImageBox";
import ActionButtons from "../components/ActionButtons";
import FilterBox from "../components/FilterBox";

function DonutPage() {
  const navigate = useNavigate();

  
  const handleNavClick = (button) => {
    if (button.toLowerCase().includes("water")) {
      navigate("/water");
    }
    if (button.toLowerCase().includes("inventory")) {
      navigate("/inventory");
    }
    if (button.toLowerCase().includes("home")) {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen border border-black p-4">
      <h1 className="m-4 text-3xl font-bold">Donate Page</h1>

      
      <NavButtons 
        buttons={["Inventory", "Home", "water saved "]} 
        onButtonClick={handleNavClick}
      />

      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3">
          <ImageBox label="Picture of clothing" />

          <ActionButtons
            leftButton="Donate it"
            middleButton="Go to Inventory"
            rightButton="Keep item"
            onMiddleClick={() => navigate("/inventory")}
          />
        </div>

        <div className="col-span-1">
          <div className="m-6 border border-black p-3 text-lg">
            Orange dress goes in yellow area
          </div>
        </div>
      </div>

      <FilterBox
        title="Filter"
        filters={["Jackets", "Shirts", "Shoes"]}
      />
    </div>
  );
}

export default DonutPage;

