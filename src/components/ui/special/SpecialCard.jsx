import { WiDirectionUpLeft } from "react-icons/wi";
// import specialCardImage from "../../../assets/special-images/headphone.png";
function SpecialCard({ specialCardImage }) {
  return (
    <div className=" flex flex-col shrink-0 rounded-md bg-[#F6F6F6] pt-5 px-5 w-80 sm:w-[190px] h-96 sm:h-[230px]">
      <h3 className="font-semibold text-3xl sm:text-lg sm:leading-6 font-fm text-[#212328]">
        سماعات وايرلس
      </h3>
      <h5 className="font-normal text-base sm:text-sm font-fm">
        خصم يصل حتي %50
      </h5>
      <a className="text-[#3074F0] font-medium text-base sm:text-sm font-fm underline">
        أطلب الأن
        <WiDirectionUpLeft className="inline" />
      </a>
      <div className="overflow-hidden">
        <img
          className="w-fit h-fit sm:w-[138px] sm:h-[138px]  object-cover "
          src={specialCardImage}
          alt="Headphones"
        />
      </div>
    </div>
  );
}

export default SpecialCard;
