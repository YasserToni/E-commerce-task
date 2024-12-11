import { FaStar } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";

function CardWithoustDiscount() {
  return (
    <div dir="rtl" className="m-10 ">
      <div className="flex gap-2 items-center ">
        <div className="w-64 h-96 p-2 rounded-xl shadow-card relative">
          <AiOutlineShoppingCart className=" bg-[#3074F0] text-[#FFF]  py-1 px-1.5 absolute left-5 bottom-32 w-6 h-6 rounded-md hover:cursor-pointer" />
          <img
            className="max-w-60 max-h-64 pb-6 mx-auto"
            src="https://s3-alpha-sig.figma.com/img/5768/b272/374e78a22a2cb01c042636ef79f9bcbf?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fcqCWnZ-lxAx9-ftFFkVWkDTFAMpWfbs-mtncce-m3pyT3m4RxCJBUWIlOhve4G4GkBfpTFzxU~yApwNisaRh9PS63ATUHD5TcfI1tSXDTX7ANRWPRyoj61mDkjpq~XJinbfIaV3xObRdGjipPT-WH7~kkEOayDrNVJXj2K9PE25SGBgKtagyVWlRnOn-vQmXCyueaWt-Tio7ve-qAcRM22B7D0mtIoehkFh7zhptjLp-RUElfhnSYnpHU-jAJHHJo7vHsigwCBmMZK0dYK2tk~gu69HZmOSC6pijEFb-i6BrNGMVl3c5bVsQ6JVfvdsQkNaooOejChpv5FxmsBQ0g__"
            alt=""
          />

          <div>
            <h3 className="font-normal text-lg font-fm text-[#454545]">
              سامسونج الترا جالاكسي. شريحتان اتصال بلون بنفسجي.
            </h3>
            <div className="flex items-center justify-between">
              <div>
                <span className="font-bold text-xl text-[#E02954]">6500ج</span>
                <span className="font-normal text-base text-[#808080]">
                  7000
                </span>
              </div>
              <div className="flex items-center">
                4.2/5
                <FaStar className="text-yellow-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardWithoustDiscount;
