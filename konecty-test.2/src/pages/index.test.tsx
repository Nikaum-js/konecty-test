import { render, screen, fireEvent, act } from '@testing-library/react';
import axios from 'axios';
import Home from './index';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const products = [
  {
    id: '1',
    mark: 'Nike',
    description: 'Air Force 1 Jester XX Black Sonic Yellow',
    price: 96.8,
    img: 'https://pub-600236de218b4c7ba5f493c818f764f2.r2.dev/image%203.png',
  },
];

describe('Home', () => {
  test('renders products', async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: products });

    await act(async () => {
      render(<Home />);
    });

    expect(
      await screen.findByText(/Air Force 1 Jester XX Black Sonic Yellow/i),
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Buscar produto/i)).toBeInTheDocument();
    expect(screen.getByText(/Tênis/i)).toBeInTheDocument();
  });

  test('filters products by badge', async () => {
    mockedAxios.get.mockResolvedValue({ data: products });

    await act(async () => {
      render(<Home />);
    });

    const badge = screen.getAllByText('Nike')[0];
    fireEvent.click(badge);

    expect(mockedAxios.get).toHaveBeenCalledWith('/api/products', {
      params: { mark: 'Nike', search: '' },
    });
  });
});
