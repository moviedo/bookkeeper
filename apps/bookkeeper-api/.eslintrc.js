module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:adonis/typescriptApp',
    'prettier'
  ],
  plugins: [
    'prettier'
  ],
  rules: {
    'prettier/prettier': [
      'error'
    ]
  }
}
