module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'Breaking',
        'Fix',
        'Update',
        'New',
      ],
    ],
    'type-case': [2, 'always', 'pascal-case']
  }
}
