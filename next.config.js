/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images:{
    domains:[ ],
    dangerouslyAllowSVG:true 

  }
}

module.exports = nextConfig