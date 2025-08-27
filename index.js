const voiceQueue = require('./queue');
const Bottleneck = require('bottleneck');
const axios = require('axios');
const config = require('./config');

console.log('👷 Worker started and waiting for jobs...');
const limiter = new Bottleneck({
  maxConcurrent: 100,
  minTime: 1000,
});
voiceQueue.process('process', 2, async (job) => {
  console.log('📥 Received job:', job.id);
  console.log('📦 Data:', job.data);
  let { phoneNumber, id, audioFileUrl } = job.data;
  executeVoice(phoneNumber, id, audioFileUrl)
  console.log("ppppppppppppppppppppppppppppppppppppppppppppppppp")
  console.log(phoneNumber, id, audioFileUrl);
});


/*
  const data = {
    audioFileUrl: audioFileUrl,
    to: phoneNumber,
    from: config.infobipPhoneFRom,
    callbackData: id,
  };
  */

async function executeVoice(phoneNumber, id, audioFileUrl) {
  try {
    const endpoint = `${config.infobipBaseUrl}`
    let payload = {
      "messages": [
        {
          "from": config.infobipPhoneFRom,
          "destinations": [
            {
              "to": phoneNumber,
            },
          ],
          "audioFileUrl": audioFileUrl,
          "text": "",
          callbackData: id,
        }
      ]
    }
    const response = await axios.post(endpoint, payload, {
      headers: {
        'Authorization': `App ${config.infobipApiKey}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
    console.log('Success:', JSON.stringify(response.data));
  } catch (error) {
    if (error.response) {
      console.error('Error response:', error.response.data);
    } else {
      console.error('Error message:', error.message);
    }
  }
}

/*
async function executeVoice(phoneNumber, id, audioFileUrl) {
  try {
    const endpoint = `${config.infobipBaseUrl}`
    const data = {
      audioFileUrl: audioFileUrl,
      to: phoneNumber,
      from: config.infobipPhoneFRom,
      callbackData: "aseye" + id,
      notifyUrl: "https://megavoice.elicitlabs.link/infobip/voice-status",
      notifyContentType: "application/json",
    };
    const response = await axios.post(endpoint, payload,{
      headers: {
        'Authorization': `App ${config.infobipApiKey}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
    console.log('Success:', JSON.stringify(response.data));
  } catch (error) {
    if (error.response) {
      console.error('Error response:', error.response.data);
    } else {
      console.error('Error message:', error.message);
    }
  }
}
*/

/*

/*
COMPLETED
/*

const axios = require('axios');

const INFOPBIP_BASE_URL = 'https://<your-subdomain>.api.infobip.com'; // e.g., https://r8g5n2.api.infobip.com
const API_KEY = 'YOUR_API_KEY_HERE';

const callWithAudio = async () => {
  try {
    const response = await axios.post(
      `${INFOPBIP_BASE_URL}/voice/1/calls`,
      {
        destinations: [
          { to: "+233XXXXXXXXX" } // Replace with recipient number
        ],
        from: "YourCallerID", // Your verified number or sender ID
        callRecording: false,
        callTimeout: 20,
        // Play pre-recorded audio file
        audio: {
          fileUrl: "https://yourdomain.com/audio/message.mp3", // HTTPS only
          fileType: "MP3"
        },
        notificationCallbackUrl: "https://yourdomain.com/infobip/callback"
      },
      {
        headers: {
          'Authorization': `App ${API_KEY}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    );

    console.log("Call initiated! Response:", response.data);
  } catch (error) {
    console.error("Error sending voice message:", error.response?.data || error.message);
  }
};

callWithAudio();


*/
