module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
    'prettier', // Make sure this is always the last element in the array.
  ],
  rules: {
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: {
          // un-ban a type that's banned by default
          '{}': false,
        },
      },
    ],
  },
  ignorePatterns: ['prettier.config.js']
}
