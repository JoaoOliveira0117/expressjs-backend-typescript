module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: 'standard-with-typescript',
  overrides: [
  ],
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    '@typescript-eslint/no-misused-promises': 0,
    '@typescript-eslint/no-this-alias': 0,
    '@typescript-eslint/strict-boolean-expressions': 0
  }
}
