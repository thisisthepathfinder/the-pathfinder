module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:vue/base',
    'plugin:vue/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    indent: ['error', 2],
    'vue/max-attributes-per-line': ['error', {
      singleline: 1,
      multiline: {
        max: 1,
        allowFirstLine: false
      }
    }],
    'vue/object-curly-spacing': ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
    'template-curly-spacing': ['error', 'always'],
    'no-console': ['off']
  }
}
