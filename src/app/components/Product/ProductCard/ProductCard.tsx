import "./ProductCard.scss";
import Image from 'next/image';

interface ProductCardProps {
  imageSrc: string;
  productName: string;
  description: string;
  price: number;
  rating: number;
  reviews: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  productName,
  description,
  price,
  rating,
  reviews,
}) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <Image
          src={imageSrc}
          alt={productName}
          width={300}
          height={400}
          className='w-full'
        />
      </div>
      <div className="product-info flex flex-col items-start p-2">
        <h3>{productName}</h3>
        <div className="desc">{description}</div>
        <div className="product-price">
          <span>$ {price.toFixed(2)}</span>
        </div>
        <div className="product-rating">
          <span className='text-black'>⭐ {rating.toFixed(1)}</span>
          <span>({reviews})</span>
        </div>
      </div>
    </div>
  );
};