function HeaderProductList({ about }) {
  return (
    <div
      dir="rtl"
      className="bg-[#F5F5F5] px-14 sm:px-4 py-3 sm:py-2 font-fm font-normal text-base sm:text-sm sm:leading-4"
    >
      الصفحة الرئيسية /<span className="font-bold text-[#3047F0]">{about}</span>
    </div>
  );
}

export default HeaderProductList;
