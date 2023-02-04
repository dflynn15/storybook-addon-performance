const config = {
  presets: [
    ['@babel/preset-typescript'],
    [
      '@babel/preset-env',
      {
        modules: false,
      },
    ],
    '@babel/preset-react',
  ],
};
export default config;
