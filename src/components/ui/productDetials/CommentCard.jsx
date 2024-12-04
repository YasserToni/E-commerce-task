import userImage from "../../../assets/user/user.jpeg";

function CommentCard() {
  return (
    <div
      dir="rtl"
      className="w-[460px] sm:w-[323px] h-[190px] sm:h-[134px] bg-[#F3F5F9] rounded-3xl pt-5 pb-7 pr-5 "
    >
      <div className="flex gap-3 items-center">
        <img
          className="w-14 sm:w-9 h-14 sm:h-9 rounded-full "
          src={userImage}
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
      <p className="font-normal font-fr text-lg sm:text-sm text-[#262D35] pt-2 sm:pt-1 pl-36 sm:pl-10">
        “تجربه رائعه ومميزه. لقد أعجبني هذا المنتج حقًا، ويستحق التجربة. اذا كنت
        ترغب بشرائة لا تتردد انا انصح به وبشدة ”
      </p>
    </div>
  );
}

export default CommentCard;
