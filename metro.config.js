/* eslint-disable @typescript-eslint/no-var-requires */
const { getDefaultConfig } = require('@expo/metro-config');
const defaultConfig = getDefaultConfig(__dirname);

// Update sourceExts and assetExts
defaultConfig.resolver.sourceExts = ['js', 'jsx', 'json', 'ts', 'tsx', 'cjs', 'mjs'];
defaultConfig.resolver.assetExts = ['ttf', 'glb', 'gltf', 'png', 'jpg'];

// Add an additional asset plugin
defaultConfig.transformer.assetPlugins.push(require.resolve('expo-asset/tools/hashAssetFiles'));

module.exports = defaultConfig;
