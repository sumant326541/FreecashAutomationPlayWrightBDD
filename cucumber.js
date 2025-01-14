const common = `
  --require setup/assertions.js
  --require setup/hooks.js
  --require step-definitions/**/*.step.js
  --require-module ts-node/register
`;

module.exports = {
  default: `${common} features/**/*.feature`,
};
