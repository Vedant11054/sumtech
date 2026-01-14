import { useState } from "react";
import { Link } from "react-router-dom";
import { productMenu } from "@/data/productMenu";
import { divisions } from "@/data/divisions";
import { ChevronRight } from "lucide-react";

// Map division titles to their IDs
const divisionTitleToId: Record<string, string> = {};
divisions.forEach((division) => {
  divisionTitleToId[division.title] = division.id;
});

// Flatten products from all categories for each division
function getAllProductsForDivision(division: string): string[] {
  const categories = productMenu[division];
  const allProducts: string[] = [];
  Object.values(categories).forEach((products: any) => {
    allProducts.push(...products);
  });
  return allProducts;
}

export function ProductMegaMenu() {
  const divisionTitles = Object.keys(productMenu);
  const [activeDivision, setActiveDivision] = useState(divisionTitles[0]);

  const activeDivisionId = divisionTitleToId[activeDivision];
  const productsForActiveDivision = getAllProductsForDivision(activeDivision);

  return (
    <div className="absolute top-full left-0 bg-black z-50 shadow-2xl border border-white/10">
      <div className="flex">

        {/* COLUMN 1 – DIVISIONS */}
        <ul className="border-r border-white/15 py-2 w-72">
          {divisionTitles.map((division) => (
            <li
              key={division}
              onMouseEnter={() => setActiveDivision(division)}
              className={`px-5 h-10 flex items-center justify-between cursor-pointer
                text-[13px] font-medium tracking-wide whitespace-nowrap transition-colors
                ${
                  activeDivision === division
                    ? "bg-white/10 text-white"
                    : "text-gray-300 hover:bg-white/5"
                }`}
            >
              <span>{division}</span>
              <ChevronRight size={12} className="opacity-60" />
            </li>
          ))}
        </ul>

        {/* COLUMN 2 – PRODUCTS */}
        <ul className="py-2 bg-black w-80">
          {productsForActiveDivision.map((product) => (
            <li key={product}>
              <Link
                to={`/products/${activeDivisionId}`}
                className="px-5 h-10 flex items-center cursor-pointer
                  text-[13px] font-medium tracking-wide whitespace-nowrap
                  text-gray-300 hover:bg-white/10 hover:text-white block transition-colors"
              >
                {product}
              </Link>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}
