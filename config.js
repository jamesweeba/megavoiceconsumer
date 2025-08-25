let config = {
    accountSid: process.env.TWILIO_ACCOUNT_SID,
    authToken: process.env.TWILIO_AUTH_TOKEN,
    twilioPhoneNumber: process.env.TWILIO_PHONE_NUMBER || '+233242426295',
    twilioApiUrl: process.env.TWILIO_API_URL || 'https://api.twilio.com',
    twilioApiVersion: process.env.TWILIO_API_VERSION || '2010-04-01',
    redisHost: process.env.REDIS_HOST || "44.198.162.244"||'localhost',
    redisPort: process.env.REDIS_PORT || '6339',
    redisPassword: process.env.REDIS_PASSWORD||"H0r6C0rpA3w0RED1S" ,
    voicedomainUrl: process.env.VOICE_URL ||"http://66.96.83.232" || 'https://yourdomain.com',
    infobipBaseUrl: process.env.API_BASE_URL || 'https://ypq9yj.api.infobip.com/tts/3/advanced',
    infobipApiKey: process.env.API_KEY || 'f8021ccafee1f928d27479fbee1a2551-fe6ed24d-641b-4119-aceb-3bff13631361',
    infobipPhoneFRom: process.env.INFOPHONE_FROM || '442032864231',
    // statusCallbackUrl: process.env.STATUS_CALLBACK_URL || 'https://yourdomain.com/voice/call-status',

}


module.exports = config;
/*
REDIS_HOST= "http://66.96.83.232"||"localhost"
REDIS_PORT=6379
REDIS_PASSWORD="2@cUaKbUMExF3" ||"your_redis_password" 

*/    