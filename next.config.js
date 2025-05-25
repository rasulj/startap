/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images:{
  domains: ['media.graphassets.com' , 'localhost','startap-server.onrender.com'],
		dangerouslyAllowSVG: true,

  }
}

module.exports = nextConfig