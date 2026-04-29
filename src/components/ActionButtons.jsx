
function ActionButtons({
  leftButton,
  middleButton,
  rightButton,
  onLeftClick,
  onMiddleClick,
  onRightClick,
}) {
  return (
    <div className="m-6 flex justify-center gap-4">
      <button
        onClick={onLeftClick}
        className="border border-black px-6 py-2 text-lg"
      >
        {leftButton}
      </button>

      <button
        onClick={onMiddleClick}
        className="border border-black px-6 py-2 text-lg"
      >
        {middleButton}
      </button>

      <button
        onClick={onRightClick}
        className="border border-black px-6 py-2 text-lg"
      >
        {rightButton}
      </button>
    </div>
  );
}

export default ActionButtons;





import { useNavigate } from "react-router-dom";
