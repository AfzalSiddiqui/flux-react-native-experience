const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

// Local packages that are symlinked via file: references
const localPackages = [
  path.resolve(__dirname, '../flux-react-native-ds'),
  path.resolve(__dirname, '../flux-react-native-assets'),
  path.resolve(__dirname, '../flux-react-native-foundation'),
];

// Watch the local package directories
config.watchFolders = [...localPackages];

// Make sure Metro can resolve modules from local packages
config.resolver.nodeModulesPaths = [
  path.resolve(__dirname, 'node_modules'),
];

// Ensure symlinks are followed
config.resolver.unstable_enableSymlinks = true;

module.exports = config;
