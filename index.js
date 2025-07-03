const voiceQueue = require('./queue');
const Bottleneck = require('bottleneck');
const axios = require('axios');
const config = require('./config');
const accountSid = process.env.TWILIO_ACCOUNT_SID ;
const authToken =  process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

console.log('👷 Worker started and waiting for jobs...');

const limiter = new Bottleneck({
    maxConcurrent: 100,
    minTime: 1000,
});
voiceQueue.process('process',2, async (job) => {
  console.log('📥 Received job:', job.id);
  console.log('📦 Data:', job.data);
  let{phoneNumber,id,audioFileUrl}=job.data
    const voiceUrl = `${config.voicedomainUrl}/voice?filename=${audioFileUrl}`;
    try {
      client.calls
  .create({
    url:  voiceUrl,
    to: `+${phoneNumber}`,
    from: '+233242426295',
    statusCallback:`${config.voicedomainUrl}/voice/call-status?callSid=${id}` ,
    statusCallbackMethod: 'POST',
    tatusCallbackEvent: ['completed'],
   })
  .then(call => console.log(call.sid));
//     const voiceUrl = `https://f27e-154-161-17-232.ngrok-free.app/voice?filename=${encodeURIComponent(audiFileUrl)}`;
//     const response = await limiter.schedule(async () =>
//   await client.calls.create({
//   url: voiceUrl||'https://yourdomain.com/voice',
//   to: `+${phoneNumber}`,
//   from: '+233242426295'||'+0987654321',
//   statusCallback: `https://f27e-154-161-17-232.ngrok-free.app/voice/call-status?callSid=${id}`,  // Twilio sends updates here
//   statusCallbackMethod: 'POST',
//   statusCallbackEvent: ['completed'], // or ['initiated', 'ringing', 'completed']
// }));
    console.log(`✅ Job ${job.id} processed. Status: `);
  } catch (err) {
    console.error(`❌ Failed to process job ${job.id}:`, err.message);
    throw err; // Bull will retry if configured to
  }
  console.log('✅ Done processing job:', job.id);
});
