// require('dotenv').config();
const Queue = require('bull');

const voiceQueue = new Queue('voice-message', {
  redis: {
    host:'localhost' ||process.env.REDIS_HOST,
    port:'6379' || process.env.REDIS_PORT,
  },
});

module.exports = voiceQueue;
