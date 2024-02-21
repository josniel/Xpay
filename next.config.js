/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
      ignoreBuildErrors: true,
  },
  swcMinify: false,
  compiler: {
      styledComponents: true,
  },
  async redirects() {
      return [{
          source: '/',
          destination: '/home',
          permanent: false,
      }, ]
  },
}

module.exports = nextConfig
