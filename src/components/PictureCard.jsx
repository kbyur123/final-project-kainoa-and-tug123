function PictureCard({ image, title }) {
    return (
      <div className="flex flex-col items-center">
        <div className="h-28 w-28 rounded-md border-2 border-black">
          <img
            src={image}
            alt={title}
            className="h-full w-full rounded-md object-cover"
          />
        </div>
        <p className="mt-2 text-center text-sm">{title}</p>
      </div>
    );
  }
  
  export default PictureCard;
  
  