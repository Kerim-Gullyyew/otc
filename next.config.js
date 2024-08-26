module.exports = {
  experimental: {
    typedRoutes: true,
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.onlinetutoringcourses.com',
        pathname: '/assets/**',
      },
    ],
  },
}
