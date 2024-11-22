function SectionCard({ cardName, imgSrc, imgAlt }) {
  return (
    <div className="flex justify-center items-center flex-col py-1 px-2 bg-[#F6F6F6] rounded-2xl w-52 h-56">
      <img
        className="w-fit h-fit max-w-36  max-h-44"
        src={imgSrc}
        alt={imgAlt}
      />
      <h2 className="font-bold text-lg pb-2 text-[#212328]">{cardName}</h2>
    </div>
  );
}

export default SectionCard;
