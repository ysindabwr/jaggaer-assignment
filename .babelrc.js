module.exports = function (api) {
  api.cache(() => process.env.NODE_ENV); // ✅ safer caching

  const isDev = api.env() !== 'production';

  return {
    presets: [
      ['@babel/preset-env', { targets: 'defaults' }],
      ['@babel/preset-react', { runtime: 'automatic' }],
      '@babel/preset-typescript',
    ],
    plugins: [isDev && require.resolve('react-refresh/babel')].filter(Boolean),
  };
};
