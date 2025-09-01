import { ProductCarousel } from "../AllProducts/ProductCarousel";
import CategoryNav from "./CategoryNav";

const dummyProducts = [
  { id: '1', imageSrc: "/Rectangle 82.png", productName: 'Jacket', description : "فستان بنمط كتل الألوان فستان بنمط كتل الألوان فستان بنمط كتل الألوان" , price: 711, rating: 4.5, reviews: 345 },
  { id: '2', imageSrc: "/Rectangle 82.png", productName: 'Jacket', description : "فستان بنمط كتل الألوان فستان بنمط كتل الألوان فستان بنمط كتل الألوان" , price: 711, rating: 4.5, reviews: 345 },
  { id: '3', imageSrc: "/Rectangle 82.png", productName: 'Jacket', description : "فستان بنمط كتل الألوان فستان بنمط كتل الألوان فستان بنمط كتل الألوان" , price: 711, rating: 4.5, reviews: 345 },
  { id: '4', imageSrc: "/Rectangle 82.png", productName: 'Jacket', description : "فستان بنمط كتل الألوان فستان بنمط كتل الألوان فستان بنمط كتل الألوان" , price: 711, rating: 4.5, reviews: 345 },
  { id: '5', imageSrc: "/Rectangle 82.png", productName: 'Jacket', description : "فستان بنمط كتل الألوان فستان بنمط كتل الألوان فستان بنمط كتل الألوان" , price: 711, rating: 4.5, reviews: 345 },
  { id: '6', imageSrc: "/Rectangle 82.png", productName: 'Jacket', description : "فستان بنمط كتل الألوان فستان بنمط كتل الألوان فستان بنمط كتل الألوان" , price: 711, rating: 4.5, reviews: 345 },
  { id: '7', imageSrc: "/Rectangle 82.png", productName: 'Jacket', description : "فستان بنمط كتل الألوان فستان بنمط كتل الألوان فستان بنمط كتل الألوان" , price: 711, rating: 4.5, reviews: 345 },

];

export default function ProductsByCategory() {
  return (
    <div className="container mx-auto space-y-4 md:space-y-6">
      <CategoryNav />
      <ProductCarousel products={dummyProducts} />
    </div>
  );
}