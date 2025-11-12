/* Root ESLint config */
module.exports = {
  root: true,
  ignorePatterns: ['dist', 'node_modules'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  env: { node: true, es2022: true },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parserOptions: { project: false },
      rules: {}
    }
  ]
};
