const dotenv = require('dotenv');
const path = require('path');

const loadConfig = () => {
  const configPath = path.join(
    process.cwd(),
    'config',
    `.env.${process.env.NODE_ENV || 'development'}.properties`,
  );
  dotenv.config({ path: configPath });
}

loadConfig();
