const fs = require('fs');
const path = require('path');

function loadConfig() {
  const env = process.env.NODE_ENV || 'prod';
  const configPath = path.resolve(__dirname, `${env}.json`); // Resolve the absolute path to the config file
  if (!fs.existsSync(configPath)) {
    throw new Error(`Config file for environment "${env}" not found at ${configPath}`);
  }
  return JSON.parse(fs.readFileSync(configPath, 'utf-8'));
}

module.exports = loadConfig();
