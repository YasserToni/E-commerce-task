import { useState } from "react";
import CheckedboxList from "./CheckedboxList";

function SideBar() {
  const [checkedItems, setCheckedItems] = useState({});

  const items = [
    { id: 1, label: "هواتف" },
    { id: 2, label: "لابتوب" },
    { id: 3, label: "ساعات ذكية" },
    { id: 4, label: "سماعات وايرلس" },
    { id: 5, label: "ايباد" },
    { id: 6, label: "تابليت" },
    { id: 7, label: "شاشات ذكية" },
    { id: 8, label: "ايربودز" },
  ];

  // Handle checkbox change
  const handleCheckboxChange = (id) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className="sticky top-5 sm:hidden shadow-card px-8 pt-4 pb-8 h-fit w-[292px] bg-white sidebar-shadow rounded-[16px]">
      <span className="block font-bold text-xl text-[#212328] px-4 py-2">
        الاقسام
      </span>
      <CheckedboxList
        checkedItems={checkedItems}
        handleCheckboxChange={handleCheckboxChange}
        items={items}
      />
    </div>
  );
}

export default SideBar;
