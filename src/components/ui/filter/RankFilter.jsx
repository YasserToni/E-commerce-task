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

import { useState } from "react";
import { BsArrowDownUp } from "react-icons/bs";

function RankFilter() {
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    { id: 1, label: "الاعلي تقييماً" },
    { id: 2, label: "المضاف حديثاً" },
    { id: 3, label: " الاعلي سعراً" },
    { id: 4, label: " مقترح لك" },
    { id: 5, label: "من (أ) الي (ي)" },
    { id: 6, label: "من (ي) الي (أ)" },
  ];

  const handleRadioChange = (id) => {
    setSelectedItem(id);
  };

  return (
    <div>
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger>
            <BsArrowDownUp />
          </SheetTrigger>
          <SheetContent className="w-[360px] h-[fit] rounded-t-[40px] px-10">
            <SheetHeader>
              <SheetTitle>
                <div className="flex flex-col gap-4 justify-center items-center">
                  <span className="w-[68px] h-[5px] bg-[#EAEAEA] rounded-[19px]"></span>
                  <span className="font-bold font-fr text-xl text-[#252534]">
                    ترتيب حسب
                  </span>
                </div>
              </SheetTitle>
              <SheetDescription>
                <div
                  dir="rtl"
                  className="shadow-card pt-4 pb-8 h-fit w-[292px] bg-white sidebar-shadow rounded-[16px]"
                >
                  <div className="space-y-2 px-4 text-[#5C5C5C] text-base">
                    {items.map((item) => (
                      <label
                        key={item.id}
                        className="flex items-center gap-2.5"
                      >
                        <input
                          type="radio"
                          name="section"
                          checked={selectedItem === item.id}
                          onChange={() => handleRadioChange(item.id)}
                          className="h-4 w-4 text-blue-600 rounded-full border-gray-300 focus:ring-blue-500"
                        />
                        <span
                          className={
                            selectedItem === item.id
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

export default RankFilter;
