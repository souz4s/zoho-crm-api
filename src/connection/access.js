const axios = require("axios");
require("dotenv").config();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const CODE = process.env.CODE;

async function retunrJSON() {
    const response = await axios.post(`https://accounts.zoho.com/oauth/v2/token?client_id=${CLIENT_ID}&grant_type=authorization_code&client_secret=${CLIENT_SECRET}&redirect_uri=https://www.zylker.com/oauthredirect&code=${CODE}`);

    return response.data;
}

(async () => {
    console.log(await retunrJSON());
})();