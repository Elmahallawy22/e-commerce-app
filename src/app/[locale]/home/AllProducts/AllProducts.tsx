import { ProductCarousel } from "./ProductCarousel";
import './AllProducts.scss';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const dummyProducts = [
  { id: '1', imageSrc: "/Rectangle 82.png", productName: 'Jacket', description: "فستان بنمط كتل الألوان فستان بنمط كتل الألوان فستان بنمط كتل الألوان", price: 711, rating: 4.5, reviews: 345 },
  { id: '2', imageSrc: "/Rectangle 82.png", productName: 'Jacket', description: "فستان بنمط كتل الألوان فستان بنمط كتل الألوان فستان بنمط كتل الألوان", price: 711, rating: 4.5, reviews: 345 },
  { id: '3', imageSrc: "/Rectangle 82.png", productName: 'Jacket', description: "فستان بنمط كتل الألوان فستان بنمط كتل الألوان فستان بنمط كتل الألوان", price: 711, rating: 4.5, reviews: 345 },
  { id: '4', imageSrc: "/Rectangle 82.png", productName: 'Jacket', description: "فستان بنمط كتل الألوان فستان بنمط كتل الألوان فستان بنمط كتل الألوان", price: 711, rating: 4.5, reviews: 345 },
  { id: '5', imageSrc: "/Rectangle 82.png", productName: 'Jacket', description: "فستان بنمط كتل الألوان فستان بنمط كتل الألوان فستان بنمط كتل الألوان", price: 711, rating: 4.5, reviews: 345 },
  { id: '6', imageSrc: "/Rectangle 82.png", productName: 'Jacket', description: "فستان بنمط كتل الألوان فستان بنمط كتل الألوان فستان بنمط كتل الألوان", price: 711, rating: 4.5, reviews: 345 },
  { id: '7', imageSrc: "/Rectangle 82.png", productName: 'Jacket', description: "فستان بنمط كتل الألوان فستان بنمط كتل الألوان فستان بنمط كتل الألوان", price: 711, rating: 4.5, reviews: 345 },

];

export default function AllProducts() {
  const t = useTranslations("ShowMore");

  return (
    <div className="container mx-auto">
      <div className="carousel-header flex justify-end mb-1">
        <Link href="/shop/all" className="show-more-link">
          {t("show_more")} &gt;
        </Link>
      </div>
      <ProductCarousel products={dummyProducts} />
    </div>
  );
}