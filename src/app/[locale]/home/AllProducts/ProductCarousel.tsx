import Link from 'next/link';
import { ProductSwiper } from '@/app/components/Product/ProductSwiper/ProductSwiper';
import { useTranslations } from 'next-intl';

interface ProductCarouselProps {
  products: {
    id: string;
    imageSrc: string;
    productName: string;
    description: string;
    price: number;
    rating: number;
    reviews: number;
  }[];
}

export const ProductCarousel: React.FC<ProductCarouselProps> = ({ products }) => {
  const t = useTranslations("ShowMore");

  return (
    <div className="carousel-container" >
      <div className="carousel-header justify-end">
        <Link href="/shop/all" className="show-more-link">
          {t("show_more")} &gt;
        </Link>
      </div>
      <ProductSwiper products={products} />
    </div>
  );
};