function NavButtons({ buttons, onButtonClick }) {
  return (
    <div className="m-4 flex justify-center gap-4">
      {buttons.map((button, index) => (
        <button
          key={index}
          onClick={() => onButtonClick(button)}
          className="border border-black px-4 py-2 text-lg hover:bg-gray-200"
        >
          {button}
        </button>
      ))}
    </div>
  );
}



export default NavButtons;



