/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static Site Generation
  images: {
    unoptimized: true, // Required for static export
  },
}

export default nextConfig