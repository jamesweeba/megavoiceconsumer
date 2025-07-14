let config = {
    accountSid: process.env.TWILIO_ACCOUNT_SID,
    authToken: process.env.TWILIO_AUTH_TOKEN,
    twilioPhoneNumber: process.env.TWILIO_PHONE_NUMBER || '+233242426295',
    twilioApiUrl: process.env.TWILIO_API_URL || 'https://api.twilio.com',
    twilioApiVersion: process.env.TWILIO_API_VERSION || '2010-04-01',
    redisHost: process.env.REDIS_HOST || "66.96.83.232"||'localhost',
    redisPort: process.env.REDIS_PORT || '6379',
    redisPassword: process.env.REDIS_PASSWORD||"2@cUaKbUMExF3" ,
    voicedomainUrl: process.env.VOICE_URL ||"http://66.96.83.232" || 'https://yourdomain.com',
    // statusCallbackUrl: process.env.STATUS_CALLBACK_URL || 'https://yourdomain.com/voice/call-status',

}


module.exports = config;



/*
REDIS_HOST= "http://66.96.83.232"||"localhost"
REDIS_PORT=6379
REDIS_PASSWORD="2@cUaKbUMExF3" ||"your_redis_password" 

*/