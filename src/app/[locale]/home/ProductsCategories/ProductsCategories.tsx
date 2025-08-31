import React from 'react';
import Image from 'next/image';
import "./ProductsCategories.scss";
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const categories = [
  { name: "men", image: "/productCategories/Men.png" },
  { name: "women", image: "/productCategories/Women.png" },
  { name: "children", image: "/productCategories/Children.png" },
  { name: "beauty", image: "/productCategories/beauty.png" },
  { name: "electronics", image: "/productCategories/electronics.png" },
  { name: "brands", image: "/productCategories/mobiles.png" },
  { name: "mobiles", image: "/productCategories/brands.png" },
  { name: "offers", image: "/productCategories/Offer.png" },
];

export default function ProductsCategories() {
  const t = useTranslations("Categories");

  return (
    <div className="categories container mx-auto px-1">
      <ul>
        {categories.map((category, index) => {
          return (
            <li key={index}>
              <Link
                href={`/categories/${category.name}`}
                className="md:space-y-2"
              >
                <Image
                  src={category.image}
                  alt={`${category.name}`}
                  width={138}
                  height={138}
                />
                <span>{t(category.name)}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}