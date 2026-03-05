/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "metatechrecoverypro.com" },
      { protocol: "https", hostname: "motivoweb.com" },
    ],
  },
};

export default nextConfig;
