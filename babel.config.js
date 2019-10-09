module.exports = {
  presets: [
    '@babel/react',
    '@babel/typescript',
    [
      '@babel/env',
      {
        targets: {
          browsers: ['last 2 versions', 'safari >= 7'],
          node: true,
        },
      },
    ],
  ],
  plugins: [
    'styled-components',
    'react-hot-loader/babel',
    '@babel/plugin-proposal-class-properties',
    ['lodash', { id: ['ramda', 'lodash'] }],
    '@babel/plugin-syntax-dynamic-import',
  ],
};
