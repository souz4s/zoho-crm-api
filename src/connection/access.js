const axios = require("axios");
require("dotenv").config();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const CODE = process.env.CODE;

async function access() {
    const response1 = await axios.post(`https://accounts.zoho.com/oauth/v2/token?client_id=${CLIENT_ID}&grant_type=authorization_code&client_secret=${CLIENT_SECRET}&redirect_uri=https://www.zylker.com/oauthredirect&code=${CODE}`);
    const refreshToken = response1.data.refresh_token;
    // Refresh token
    const response2 = await axios.post(`https://accounts.zoho.com/oauth/v2/token?refresh_token=${refreshToken}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&grant_type=refresh_token`);
    
    console.log(response2.data);
};

return access();