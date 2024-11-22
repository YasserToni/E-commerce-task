import { SelectDefault } from "./Select";

function Navbar() {
  return (
    <div className="flex justify-between mb-4">
      <div>
        <span className="font-logo text-2xl font-medium">قائمة المنتجات</span>
        <span className="font-logo text-base font-medium">(230)</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-normal font-fr text-base text-[#5C5C5C]">
          ترتيب حسب
        </span>
        <SelectDefault />
      </div>
    </div>
  );
}

export default Navbar;
