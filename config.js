let config = {
    accountSid: process.env.TWILIO_ACCOUNT_SID || 'AC400776cfeecab728288b3a9e748ecdb1',
    authToken: process.env.TWILIO_AUTH_TOKEN || 'efeec1e11d574dab5e359d528b93f57a',
    twilioPhoneNumber: process.env.TWILIO_PHONE_NUMBER || '+233242426295',
    twilioApiUrl: process.env.TWILIO_API_URL || 'https://api.twilio.com',
    twilioApiVersion: process.env.TWILIO_API_VERSION || '2010-04-01',
    redisHost: process.env.REDIS_HOST || 'localhost',
    redisPort: process.env.REDIS_PORT || '6379',
    redisPassword: process.env.REDIS_PASSWORD ,
    voicedomainUrl: process.env.VOICE_URL || 'https://yourdomain.com',
    // statusCallbackUrl: process.env.STATUS_CALLBACK_URL || 'https://yourdomain.com/voice/call-status',

}


module.exports = config;