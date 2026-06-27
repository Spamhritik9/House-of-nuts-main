/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: ['localhost'],
  },
  env: {
    NEXT_PUBLIC_BRAND_NAME: 'House of Nuts',
    NEXT_PUBLIC_PHONE: '+91 8745883125',
    NEXT_PUBLIC_EMAIL: 'houseofnutsfoods@gmail.com',
    NEXT_PUBLIC_WHATSAPP: '8745883125',
    NEXT_PUBLIC_UPI_ID: '8745883125@ybl',
    NEXT_PUBLIC_GSTIN: '06BBNPH9171E1ZI',
  },
};

module.exports = nextConfig;
