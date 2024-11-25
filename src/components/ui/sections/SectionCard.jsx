function SectionCard({ cardName, imgSrc, imgAlt }) {
  return (
    <div className="flex justify-center items-center shrink-0 flex-col py-1 px-2 bg-[#F6F6F6] rounded-2xl w-52 sm:w-[132px] sm:h-[137px] h-56">
      <img
        className="w-fit h-fit max-w-36 sm:max-w-[113px]  max-h-44 sm:max-h-[103px]"
        src={imgSrc}
        alt={imgAlt}
      />
      <h2 className="font-bold text-lg sm:text-xs sm:leading-4 pb-2 text-[#212328]">
        {cardName}
      </h2>
    </div>
  );
}

export default SectionCard;
