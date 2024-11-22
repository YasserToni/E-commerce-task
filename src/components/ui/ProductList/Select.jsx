export function SelectDefault() {
  return (
    <div className="relative w-32 ">
      <select className="block w-full px-3 py-2 font-fr text-base text-[#5C5C5C] bg-white border border-[#EDEDED] rounded-lg  focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none">
        <option value="phones">هواتف</option>
        <option value="laptops">لابتوب</option>
        <option value="smart-watches">ساعات ذكية</option>
        <option value="wireless-headphones">سماعات وايرلس</option>
        <option value="ipad">ايباد</option>
        <option value="tablet">تابليت</option>
        <option value="smart-tv">شاشات ذكية</option>
        <option value="airpods">ايربودز</option>
      </select>
    </div>
  );
}
