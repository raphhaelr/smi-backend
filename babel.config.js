module.exports = {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current',
          },
        },
      ],
      '@babel/preset-typescript',
    ],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@config': './src/config',
            '@controllers': './src/controllers',
            '@database': './src/database',
            '@interfaces': './src/interfaces',
            '@middlewares': './src/middlewares',
            '@models': './src/models',
            '@routes': './src/routes',
            '@utils': './src/utils',
          },
        },
      ],
      'babel-plugin-transform-typescript-metadata',
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      ['@babel/plugin-proposal-class-properties', { loose: false }],
    ],
  };
  