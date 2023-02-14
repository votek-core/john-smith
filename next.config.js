/** @type {import('next').NextConfig} */
const path = require('path');

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: true,
});

const nextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  images: {
    domains: ['localhost:8080', 'static.aisnogames.com', 'commondatastorage.googleapis.com'],
  },
});

const ContentSecurityPolicy = `
  base-uri 'self';
  object-src 'none';
  script-src 'unsafe-inline' 'self' 'unsafe-eval' https://vitals.vercel-insights.com;
  style-src 'unsafe-inline' 'self' 'unsafe-eval' https://fonts.googleapis.com;
`;

const securityHeaders = [
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
  },
];

nextConfig.headers = async () => {
  return [
    {
      // Apply these headers to all routes in your application.
      source: '/:path*',
      headers: securityHeaders,
    },
  ];
};

nextConfig.webpack = (config, options) => {
  const { isServer } = options;
  config.module.rules.push({
    test: /\.(ogg|mp3|wav|mpe?g)$/i,
    exclude: config.exclude,
    use: [
      {
        loader: require.resolve('url-loader'),
        options: {
          limit: config.inlineImageLimit,
          fallback: require.resolve('file-loader'),
          publicPath: `${config.assetPrefix}/_next/static/images/`,
          outputPath: `${isServer ? '../' : ''}static/images/`,
          name: '[name]-[hash].[ext]',
          esModule: config.esModule || false,
        },
      },
    ],
  });

  return config;
};

module.exports = nextConfig;
