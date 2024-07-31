import { render, screen, act } from '@testing-library/react';
import { ProductCard } from './ProductCard';
import { Product } from '../types/Product';

const product: Product = {
  id: 1,
  mark: 'Nike',
  description: 'Air Force 1 Jester XX Black Sonic Yellow',
  price: 96.8,
  img: 'https://pub-600236de218b4c7ba5f493c818f764f2.r2.dev/image%203.png',
};

describe('ProductCard', () => {
  test('renders product details', () => {
    act(() => {
      render(<ProductCard product={product} />);
    });

    expect(screen.getByText(/Nike/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Air Force 1 Jester XX Black Sonic Yellow/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/\$96.8/i)).toBeInTheDocument();
  });
});
