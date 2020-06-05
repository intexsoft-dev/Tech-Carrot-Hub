class ConfigService {

  searchRequestInterval() {
    return (+process.env.REQUEST_INTERVAL || 350) * 1000;
  }
}

const configService = new ConfigService();
module.exports = configService;
