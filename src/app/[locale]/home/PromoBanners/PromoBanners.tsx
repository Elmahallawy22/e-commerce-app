import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const banners = [
  {
    id: 1,
    image: "/promoBanners/BrandsNew.png",
    title: 'أحدث الماركات',
    linkUrl: '/categories/brands',
  },
  {
    id: 2,
    image: "/promoBanners/WomenNew.png",
    title: 'أحدث أزياء النساء',
    linkUrl: '/categories/women',
  },
  {
    id: 3,
    image: "/promoBanners/MobilesNew.png",
    title: 'أحدث الموبايلات',
    linkUrl: '/categories/mobiles',
  },
];

export default function PromoBanners() {
  const tHome = useTranslations("Home");
  const tShow = useTranslations("ShowMore");

  return (
    <section className="">
      <div className="container mx-auto flex justify-between items-center mb-1 sm:mb-2 px-2">
        <h2 className="text-lg md:text-2xl font-bold">{tHome("event_arrived")}</h2>
        <Link href={"/"}>{tShow("show_more")} &gt;</Link>
      </div>
      <div className="flex flex-row gap-1 md:gap-3">
        {banners.map((banner) => (
          <div
            key={banner.id}
            className="w-1/3"
          >
            <Link href={banner.linkUrl} >
              <Image
                src={banner.image}
                alt={banner.title}
                width={600}
                height={200}
                priority={banner.id === 1}
                className="w-full h-24 sm:h-40 md:h-52 lg:h-72"
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}