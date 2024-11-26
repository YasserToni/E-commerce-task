function CommentCard() {
  return (
    <div
      dir="rtl"
      className="w-[460px] sm:w-[323px] h-[190px] sm:h-[134px] bg-[#F3F5F9] rounded-3xl pt-5 pb-7 pr-5 "
    >
      <div className="flex gap-3 items-center">
        <img
          className="w-14 sm:w-9 h-14 sm:h-9 rounded-full "
          src="https://s3-alpha-sig.figma.com/img/1440/549a/51d84e17229992b20b9e7fe636d5c60d?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KETNRjKt-asn1z-4~3XnCZH4RCZYV7cIiA2SzCumSXzLtfFlMIed7gUIyBzFmN9lFcFQCMgn1WLXKEasRKUYX82Sq6c7GKniMwQxxV-3kMTpbeCvxfdUNl5bw6o~AsfoUybA0u8YU1-HQuoLqt9c2WPxfphNhAwT4JvlMDFnfIN9Z1y-RH220D-yH8QbWsSrgU1k1tvjJ2tJkmtpp6ENN~Je4bUiHNPdptBoKLOchqNJXoV90BMlYzZspE-T3pIA-GR5KbN~y~j~IuAzsgFLeFka89HVU0wFGrm~kdVqhlO7tW0OKtEiWsacKZNd1NE6nR5G0V0FXSrHK2wSNj9ULA__"
          alt="user image"
        />
        <div className="flex flex-col gap-1">
          <span className="font-medium text-sm  font-fr  text-[#274DCE]">
            Mohamed Ahmed
          </span>
          <span className="font-normal font-fr text-xs text-[#282A2B]">
            112/3/24
          </span>
        </div>
      </div>
      <p className="font-normal font-fr text-lg sm:text-sm text-[#262D35] pt-4 sm:pt-2 pl-36 sm:pl-10">
        “تجربه رائعه ومميزه. لقد أعجبني هذا المنتج حقًا، ويستحق التجربة. اذا كنت
        ترغب بشرائة لا تتردد انا انصح به وبشدة ”
      </p>
    </div>
  );
}

export default CommentCard;
