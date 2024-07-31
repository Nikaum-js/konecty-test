import { Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Badge } from 'src/components/Badge';
import { ProductCard } from 'src/components/ProductCard';
import { Product } from '../types/Product';
import axios from 'axios';

export default function Home() {
  const [activeBadge, setActiveBadge] = useState<string>('Todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [products, setProducts] = useState<Product[]>([]);

  const badges = ['Todos', 'Nike', 'Converse', 'New Balance', 'Asics'];

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get<Product[]>('/api/products', {
          params: {
            mark: activeBadge,
            search: searchQuery,
          },
        });
        setProducts(response.data);
      } catch (error) {
        console.error('Failed to fetch products', error);
      }
    }

    fetchProducts();
  }, [activeBadge, searchQuery]);

  return (
    <div className="w-full h-screen flex justify-center background">
      <div className="w-2/3 mt-11">
        <div className="relative w-64">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search color="#8B8B8B" size={22} />
          </span>

          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="appearance-none h-10 block w-full bg-white text-gray-700 border-none border-gray-300 rounded-lg py-2 pl-10 leading-tight focus:outline-none focus:bg-white placeholder-custom text-base font-inter input-color"
            placeholder="Buscar produto"
          />
        </div>

        <div className="mt-8">
          <h1 className="font-extrabold text-3xl text-black">Tênis</h1>

          <strong className="mt-2 font-normal text-base text-black font-inter">
            {products.length} produtos encontrados
          </strong>
        </div>

        <div className="mt-8 flex flex-col gap-2 md:flex-row">
          {badges.map((badge, index) => (
            <Badge
              key={index}
              title={badge}
              isActive={activeBadge === badge}
              onClick={() => setActiveBadge(badge)}
            />
          ))}
        </div>

        <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] lg:grid-cols-4 gap-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
