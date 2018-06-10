module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  rules: {
    'react/jsx-filename-extension': 0,
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  settings: {
    'import/resolver': {
      configurable: {
        '@Store': './src/store',
        '@Client': './src/client',
        '@Containers': './src/containers',
        '@Components': './src/components',
        '@Images': './src/assets/img',
      },
    },
  },
};
