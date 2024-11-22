import { CiUser } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";

function Input() {
  return (
    <>
      <div dir="rtl" className="flex flex-col w-full max-w-[580px]">
        {/* Label */}
        <label
          htmlFor="input-with-icon"
          className="my-3 text-sm font-medium text-[#63636E]"
        >
          الأسم الكامل
        </label>

        {/* Input Container */}
        <div className="relative">
          {/* Input Field */}
          <input
            type="text"
            id="input-with-icon"
            placeholder="ادخل اسمك بالكامل"
            className="w-full pr-10 pl-4 py-4 font-normal font-fr text-sm border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />

          {/* Icon */}
          <span className="absolute inset-y-0 right-0 flex items-center pr-4">
            <CiUser className="w-5 h-5 text-[#3074F0] " />
          </span>
        </div>
      </div>
      <div dir="rtl" className="flex flex-col w-full max-w-[580px]">
        {/* Label */}
        <label
          htmlFor="input-with-icon"
          className="my-3 text-sm font-medium text-[#63636E]"
        >
          رقم الهاتف
        </label>

        {/* Input Container */}
        <div className="relative">
          {/* Input Field */}
          <input
            type="text"
            id="input-with-icon"
            placeholder="ادخل رقم الهاتف الخاص بك"
            className="w-full pr-10 pl-4 py-4 font-normal font-fr text-sm border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />

          {/* Icon */}
          <span className="absolute inset-y-0 right-0 flex items-center pr-4">
            <IoCallOutline className="w-5 h-5 text-[#3074F0] " />
          </span>
        </div>
      </div>
      <div dir="rtl" className="flex flex-col w-full max-w-[580px]">
        {/* Label */}
        <label
          htmlFor="input-with-icon"
          className="my-3 text-sm font-medium text-[#63636E]"
        >
          العنوان
        </label>

        {/* Input Container */}
        <div className="relative">
          {/* Input Field */}
          <input
            type="text"
            id="input-with-icon"
            placeholder="ادخل عنوانك بالتفصيل"
            className="w-full pr-10 pl-4 py-4 font-normal font-fr text-sm border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />

          {/* Icon */}
          <span className="absolute inset-y-0 right-0 flex items-center pr-4">
            <GrLocation className="w-5 h-5 text-[#3074F0] " />
          </span>
        </div>
      </div>
    </>
  );
}

export default Input;
