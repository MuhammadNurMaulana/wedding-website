/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "https://qrfy.io/8st3rF4LJk",
        destination: "https://wedding-website.vercel.app/",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
