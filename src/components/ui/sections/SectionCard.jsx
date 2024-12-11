function SectionCard({ cardName, imgSrc, imgAlt }) {
  return (
    <div className="flex justify-center items-center shrink-0 flex-col py-1 pt-4 bg-[#F6F6F6] rounded-2xl w-[211px] sm:w-[132px] sm:h-[137px] h-[220px]">
      <div className="w-[148px] sm:w-[113px]  h-[175px] sm:h-[103px]">
        <img draggable="false" src={imgSrc} alt={imgAlt} />
      </div>
      <h2 className="font-bold text-lg sm:text-xs sm:leading-4 pb-4 text-[#212328]">
        {cardName}
      </h2>
    </div>
  );
}

export default SectionCard;
