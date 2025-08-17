// require('dotenv').config();
const Queue = require('bull');
const config = require('./config');
const voiceQueue = new Queue('voice-message', {
  redis: {
    host:  config.redisHost,
    port:   config.redisPort ||'6379' ,
    password: config.redisPassword
  },
});

module.exports = voiceQueue;
