import { ProductSwiper } from '@/app/components/Product/ProductSwiper/ProductSwiper';

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

  return (
    <div className="carousel-container" >
      <ProductSwiper products={products} />
    </div>
  );
};