"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheetBottom";

const SHEET_SIDES = ["bottom"];

import { CiFilter } from "react-icons/ci";
import { useState } from "react";

function SectionFilter() {
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
    <div>
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger>
            <CiFilter />
          </SheetTrigger>
          <SheetContent className=" w-full h-[fit] rounded-t-[40px] px-10">
            <SheetHeader>
              <SheetTitle>
                <div className="flex flex-col gap-4 justify-center items-center">
                  <span className="w-[68px] h-[5px] bg-[#EAEAEA] rounded-[19px]"></span>
                  <span className="font-bold font-fr text-xl text-[#252534]">
                    تصنيفات
                  </span>
                </div>
              </SheetTitle>
              <SheetDescription>
                <div
                  dir="rtl"
                  className=" shadow-card  pt-4 pb-8 h-fit w-[292px] bg-white  rounded-[16px]"
                >
                  <span className="block font-bold text-xl text-[#212328] px-4 py-2">
                    الاقسام
                  </span>
                  <div
                    className="space-y-2 px-4 text-[#5C5C5C] text-base
                  "
                  >
                    {items.map((item) => (
                      <label
                        key={item.id}
                        className="flex items-center gap-2.5"
                      >
                        <input
                          type="checkbox"
                          checked={checkedItems[item.id] || false}
                          onChange={() => handleCheckboxChange(item.id)}
                          className="h-4 w-4  text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span
                          className={
                            checkedItems[item.id]
                              ? "text-blue-600"
                              : "text-gray-700"
                          }
                        >
                          {item.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <button className="h-[43px] w-[317px] bg-[#3074F0] rounded-[44px] text-[#FFFFFF] font-bold font-fb text-base">
                    تطبيق
                  </button>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}

export default SectionFilter;
