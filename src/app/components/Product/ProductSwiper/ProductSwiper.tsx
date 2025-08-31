import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ProductCard } from '../ProductCard/ProductCard';

interface ProductSwiperProps {
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

export const ProductSwiper: React.FC<ProductSwiperProps> = ({ products }) => {
  return (
    <div dir="rtl">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={5}
        navigation
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        loop={true}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard
              imageSrc={product.imageSrc}
              productName={product.productName}
              description={product.description}
              price={product.price}
              rating={product.rating}
              reviews={product.reviews}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};