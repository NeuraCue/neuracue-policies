module.exports = {
  '*.{ts,tsx}': [
    'prettier --write',
    'eslint --fix --max-warnings=0',
    () => 'tsc --noEmit',
  ],
  '*.{json,md,yml,yaml,css}': ['prettier --write'],
};
