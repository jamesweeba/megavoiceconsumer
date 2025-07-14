// require('dotenv').config();
const Queue = require('bull');
const config = require('./config');
const voiceQueue = new Queue('voice-message', {
  redis: {
    host:  config.redisHost||    process.env.REDIS_HOST,
    port:   config.redisPort ||'6379' || process.env.REDIS_PORT,
    password: config.redisPassword|| process.env.REDIS_PASSWORD,
  },
});

module.exports = voiceQueue;
