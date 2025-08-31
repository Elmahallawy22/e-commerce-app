import { useTranslations } from "next-intl";
import { ProductCard } from "@/app/components/Product/ProductCard/ProductCard";
import Link from "next/link";

export default function FeaturedItems() {
    const tHome = useTranslations("Home");
    const tShow = useTranslations("ShowMore");

  const products = [
    { id: '1', imageSrc: "/Rectangle 82.png", productName: 'Jacket', description: "فستان بنمط كتل الألوان فستان بنمط كتل الألوان فستان بنمط كتل الألوان", price: 711, rating: 4.5, reviews: 345 },
    { id: '2', imageSrc: "/Rectangle 82.png", productName: 'Jacket', description: "فستان بنمط كتل الألوان فستان بنمط كتل الألوان فستان بنمط كتل الألوان", price: 711, rating: 4.5, reviews: 345 },
    { id: '3', imageSrc: "/Rectangle 82.png", productName: 'Jacket', description: "فستان بنمط كتل الألوان فستان بنمط كتل الألوان فستان بنمط كتل الألوان", price: 711, rating: 4.5, reviews: 345 },
    { id: '4', imageSrc: "/Rectangle 82.png", productName: 'Jacket', description: "فستان بنمط كتل الألوان فستان بنمط كتل الألوان فستان بنمط كتل الألوان", price: 711, rating: 4.5, reviews: 345 },
    { id: '5', imageSrc: "/Rectangle 82.png", productName: 'Jacket', description: "فستان بنمط كتل الألوان فستان بنمط كتل الألوان فستان بنمط كتل الألوان", price: 711, rating: 4.5, reviews: 345 },
    { id: '6', imageSrc: "/Rectangle 82.png", productName: 'Jacket', description: "فستان بنمط كتل الألوان فستان بنمط كتل الألوان فستان بنمط كتل الألوان", price: 711, rating: 4.5, reviews: 345 },
    { id: '7', imageSrc: "/Rectangle 82.png", productName: 'Jacket', description: "فستان بنمط كتل الألوان فستان بنمط كتل الألوان فستان بنمط كتل الألوان", price: 711, rating: 4.5, reviews: 345 },
    { id: '8', imageSrc: "/Rectangle 82.png", productName: 'Jacket', description: "فستان بنمط كتل الألوان فستان بنمط كتل الألوان فستان بنمط كتل الألوان", price: 711, rating: 4.5, reviews: 345 },
    { id: '9', imageSrc: "/Rectangle 82.png", productName: 'Jacket', description: "فستان بنمط كتل الألوان فستان بنمط كتل الألوان فستان بنمط كتل الألوان", price: 711, rating: 4.5, reviews: 345 },
    { id: '10', imageSrc: "/Rectangle 82.png", productName: 'Jacket', description: "فستان بنمط كتل الألوان فستان بنمط كتل الألوان فستان بنمط كتل الألوان", price: 711, rating: 4.5, reviews: 345 },
  ];

  return (
    <div className="featured-items">
      <main className="container mx-auto py-8">
        <div className="flex justify-between items-center mb-1 sm:mb-2 px-2">
          <h2 className="text-lg md:text-2xl font-bold">{tHome("featured_items")}</h2>
          <Link href={"/"}>{tShow("show_more")} &gt;</Link>
        </div>
        <div className="product-grid">
          {products.map(product => (
            <div className="" key={product.id}>
              <ProductCard
                imageSrc={product.imageSrc}
                productName={product.productName}
                description={product.description}
                price={product.price}
                rating={product.rating}
                reviews={product.reviews}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}