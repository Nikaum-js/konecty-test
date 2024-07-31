import Image from 'next/image';
import { Product } from '../types/Product';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="w-full h-full rounded-2xl bg-white border border-solid border-[#F2F2F2] px-4">
      <div className="pt-8 mb-4 h-24 flex">
        <Image
          src={product.img}
          alt={product.description}
          width={129}
          height={65}
          draggable="false"
        />
      </div>

      <div className="mb-4">
        <span className="font-inter text-base font-medium text-black">
          {product.mark}
        </span>

        <p className="font-inter text-xs text-[#7C7A7A] my-2">
          {product.description}
        </p>

        <strong className="font-inter text-black text-sm font-medium">
          ${product.price}
        </strong>
      </div>
    </div>
  );
}
