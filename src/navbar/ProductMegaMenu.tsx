import { useState } from "react";
import { productMenu } from "@/data/productMenu";
import { ChevronRight } from "lucide-react";

export function ProductMegaMenu() {
  const divisions = Object.keys(productMenu);

  const [activeDivision, setActiveDivision] = useState(divisions[0]);
  const [activeCategory, setActiveCategory] = useState(
    Object.keys(productMenu[divisions[0]])[0]
  );

  return (
    <div className="absolute top-full bg-black z-50 shadow-2xl">
      <div className="mx-auto max-w-7xl grid grid-cols-[1.3fr_1fr_1.7fr] min-h-[300px]">

        {/* COLUMN 1 – PRODUCT BUSINESS */}
        <ul className="border-r border-white/15 py-2">
          {divisions.map((division) => (
            <li
              key={division}
              onMouseEnter={() => {
                setActiveDivision(division);
                setActiveCategory(
                  Object.keys(productMenu[division])[0]
                );
              }}
              className={`px-5 h-10 flex items-center justify-between cursor-pointer
                text-[13px] font-medium tracking-wide whitespace-nowrap
                ${
                  activeDivision === division
                    ? "bg-white/10 text-white"
                    : "text-gray-300 hover:bg-black"
                }`}
            >
              <span>{division}</span>
              <ChevronRight size={12} className="opacity-60" />
            </li>
          ))}
        </ul>

        {/* COLUMN 2 – CATEGORY */}
        <ul className="border-r border-white/15 py-2 bg-black">
          {Object.keys(productMenu[activeDivision]).map((category) => (
            <li
              key={category}
              onMouseEnter={() => setActiveCategory(category)}
              className={`px-5 h-10 flex items-center justify-between cursor-pointer
                text-[13px] font-medium tracking-wide whitespace-nowrap
                ${
                  activeCategory === category
                    ? "bg-white/10 text-white"
                    : "text-gray-300 hover:bg-white/5"
                }`}
            >
              <span>{category}</span>
              <ChevronRight size={12} className="opacity-60" />
            </li>
          ))}
        </ul>

        {/* COLUMN 3 – PRODUCTS */}
        <ul className="py-2 bg-black">
          {productMenu[activeDivision][activeCategory].map((product) => (
            <li
              key={product}
              className="px-5 h-10 flex items-center cursor-pointer
                text-[13px] font-medium tracking-wide whitespace-nowrap
                text-gray-300 hover:bg-white/10 hover:text-white"
            >
              {product}
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}
