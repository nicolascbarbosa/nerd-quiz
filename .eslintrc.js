module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  rules: {
    'react/jsx-filename-extension': 0,
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
      },
    ],
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
        '@Utils': './src/utils',
        '@Containers': './src/containers',
        '@Components': './src/components',
        '@Images': './src/assets/img',
      },
    },
  },
};
