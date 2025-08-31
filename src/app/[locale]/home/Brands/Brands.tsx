import Image from 'next/image';
import React from 'react';

const banners = [
  {
    id: 1,
    image: "/Brands/AdidasBrand.png",
    title: "adidas brand",
  },
  {
    id: 2,
    image: "/Brands/HMBrand.png",
    title: "h&m brand",
  },
  {
    id: 3,
    image: "/Brands/ZaraBrand.png",
    title: "zara brand",
  },
];

const Brands = () => {

  return (
    <div className="flex flex-row gap-1 md:gap-2">
      {banners.map((banner) => (
        <div
          key={banner.id}
          className="w-1/3"
        >
          <Image
            src={banner.image}
            alt={banner.title}
            width={600}
            height={200}
            priority={banner.id === 1}
            className="w-full h-24 sm:h-40 md:h-52 lg:h-72"
          />
        </div>
      ))}
    </div>
  )
}

export default Brands