import { NextApiRequest, NextApiResponse } from 'next';
import { createMocks } from 'node-mocks-http';
import mockProducts from '../../../__mocks__/products.json';
import handler from './products';

jest.mock('../../data/products.json', () => mockProducts);

describe('/api/products handler', () => {
  test('returns all products', async () => {
    const { req, res } = createMocks({
      method: 'GET',
    });

    await handler(
      req as unknown as NextApiRequest,
      res as unknown as NextApiResponse,
    );

    expect(res._getStatusCode()).toBe(200);
    expect(res._getJSONData()).toEqual(mockProducts);
  });

  test('filters products by mark', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: {
        mark: 'Nike',
      },
    });

    await handler(
      req as unknown as NextApiRequest,
      res as unknown as NextApiResponse,
    );

    expect(res._getStatusCode()).toBe(200);
    expect(res._getJSONData()).toEqual([mockProducts[0]]);
  });
});
