import { WiDirectionUpLeft } from "react-icons/wi";

function SpecialCard({ title, discount, imgUrl, imgAlt }) {
  return (
    <div className="rounded-md bg-[#F6F6F6] p-5 w-80 h-96">
      <h3 className="font-medium text-3xl font-fm text-[#212328]">
        سماعات وايرلس
      </h3>
      <h5 className="font-normal text-base font-logo">خصم يصل حتي %50</h5>
      <a className="text-[#3074F0] font-medium text-base font-logo underline">
        أطلب الأن
        <WiDirectionUpLeft className="inline" />
      </a>
      <img
        className="w-fit h-fit  object-cover"
        src="https://s3-alpha-sig.figma.com/img/21b2/ec0b/ab2d6bdfc734791d0cf6c9c98a500926?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NVHJIguUvJLN5Sla94VOe5C2kybbwuxs4CiF5T89jGtUbHsDp5P8wjcurT9eEv4PEdzC~yePmCOWBuV81KxnoQhk13mkImSWlQGP8JT9ZDtIsONaT36U0yhLxoyvrwj0hU4kZqFP~73MEn-ZNnSqIpGM86GjD7ehMFxjeaMpv9exrBKvUz87bvFqcnfTodh7H5S0dV8Yo5MDy63~s9Z9h9a7py4eEy-52LJHvvL1Lz0gtaVlU2Y~eDhvHp5AS2fWe5NG-7KkrpEdorHV7gi5rYFAtW-NBgvs6FpFefzTh4kvK~bGxGf3CNCttzS1jcEknQntkRXzdXjaE9DzPw0bWg__"
        alt="Headphones"
      />
    </div>
  );
}

export default SpecialCard;
