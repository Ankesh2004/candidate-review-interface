import { NextApiRequest, NextApiResponse } from 'next';
import createProxyMiddleware from 'next-http-proxy-middleware';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    return createProxyMiddleware(req, res, {
        target: 'https://qyzlgjq37b.execute-api.ap-south-1.amazonaws.com/dev',
        changeOrigin: true,
        pathRewrite: { '^/api/proxy': '' },
        secure: false,
    });
}