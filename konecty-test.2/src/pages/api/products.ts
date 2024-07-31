import { NextApiRequest, NextApiResponse } from 'next';
import products from '../../data/products.json';
import { Product } from '../../types/Product';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>,
) {
  const { mark, search } = req.query;

  let filteredProducts = products;

  if (mark && mark !== 'Todos') {
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.mark.toLowerCase() === (mark as string).toLowerCase(),
    );
  }

  if (search) {
    filteredProducts = filteredProducts.filter((product) =>
      product.mark.toLowerCase().includes((search as string).toLowerCase()),
    );
  }

  res.status(200).json(filteredProducts);
}
