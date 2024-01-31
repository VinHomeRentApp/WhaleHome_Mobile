module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
          alias: {
            '@components': './src/components',
            '@screens': './src/screens',
            '@navigation': './src/navigation',
            '@utils': './src/utils',
            '@apis': './src/apis',
            '@services': './src/services',
            '@constants': './src/constants',
            '@styles': './src/styles',
            '@assets': './src/assets',
            '@hooks': './src/hooks',
            '@types': './src/types'
          }
        }
      ],
      'react-native-reanimated/plugin'
    ]
  };
};
