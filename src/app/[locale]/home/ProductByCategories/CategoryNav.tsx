import React, { useState } from 'react';
import styles from './ProductByCategories.module.scss';
import { useTranslations } from 'next-intl';

type CategoryNavProps = object;
type ActiveCategoryState = string;

const categories: string[] = [
  "newly",
  "women",
  "men",
  "sports",
  "home",
  "electronics",
  "shoes",
  "bags",
];

const CategoryNav: React.FC<CategoryNavProps> = () => {
  const [activeCategory, setActiveCategory] = useState<ActiveCategoryState>('وصل حديثاً');

  const tHome = useTranslations('Home');
  const tHeader = useTranslations('Header');
  const tShowMore = useTranslations('ShowMore');

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between mb-3">
        <h2 className="lg:hidden font-bold whitespace-nowrap">{tHome("shop_across_categories")}</h2>
        <p className='lg:hidden text-nowrap'>{tShowMore("show_more")} &gt; </p>
      </div>
      <div className="flex items-center justify-between gap-2 overflow-hidden">
        <h2 className="hidden lg:block text-xl font-bold whitespace-nowrap">{tHome("shop_across_categories")}</h2>
        <div className={`flex items-center px-1 ${styles.categoriesContainer}`}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`
              py-2 px-4 rounded-lg border border-gray-300
              whitespace-nowrap transition-colors duration-200 cursor-pointer
              ${activeCategory === category
                  ? 'bg-[#0060af] text-white'
                  : 'text-gray-700 bg-white hover:bg-gray-100'}
            `}
            >
              {tHeader(category)}
            </button>
          ))}
        </div>
        <p className='hidden lg:block text-nowrap'>{tShowMore("show_more")} &gt; </p>
      </div>
    </div>
  );
};

export default CategoryNav;