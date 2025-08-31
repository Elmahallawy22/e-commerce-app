import { ProductCarousel } from "./ProductCarousel";
import './AllProducts.scss';

const dummyProducts = [
  { id: '1', imageSrc: "/Rectangle 82.png", productName: 'Jacket', description : "فستان بنمط كتل الألوان فستان بنمط كتل الألوان فستان بنمط كتل الألوان" , price: 711, rating: 4.5, reviews: 345 },
  { id: '2', imageSrc: "/Rectangle 82.png", productName: 'Jacket', description : "فستان بنمط كتل الألوان فستان بنمط كتل الألوان فستان بنمط كتل الألوان" , price: 711, rating: 4.5, reviews: 345 },
  { id: '3', imageSrc: "/Rectangle 82.png", productName: 'Jacket', description : "فستان بنمط كتل الألوان فستان بنمط كتل الألوان فستان بنمط كتل الألوان" , price: 711, rating: 4.5, reviews: 345 },
  { id: '4', imageSrc: "/Rectangle 82.png", productName: 'Jacket', description : "فستان بنمط كتل الألوان فستان بنمط كتل الألوان فستان بنمط كتل الألوان" , price: 711, rating: 4.5, reviews: 345 },
  { id: '5', imageSrc: "/Rectangle 82.png", productName: 'Jacket', description : "فستان بنمط كتل الألوان فستان بنمط كتل الألوان فستان بنمط كتل الألوان" , price: 711, rating: 4.5, reviews: 345 },
  { id: '6', imageSrc: "/Rectangle 82.png", productName: 'Jacket', description : "فستان بنمط كتل الألوان فستان بنمط كتل الألوان فستان بنمط كتل الألوان" , price: 711, rating: 4.5, reviews: 345 },
  { id: '7', imageSrc: "/Rectangle 82.png", productName: 'Jacket', description : "فستان بنمط كتل الألوان فستان بنمط كتل الألوان فستان بنمط كتل الألوان" , price: 711, rating: 4.5, reviews: 345 },

];

export default function AllProducts() {
  return (
    <div className="container mx-auto">
      <ProductCarousel products={dummyProducts} />
    </div>
  );
}