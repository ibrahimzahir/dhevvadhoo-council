/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'www.plus.mv',
      'dashboard.convex.dev',
      'whimsical-hornet-952.convex.cloud',
    ],
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
