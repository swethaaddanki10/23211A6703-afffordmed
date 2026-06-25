const axios = require("axios");
require("dotenv").config();

async function getAccessToken() {

    try {

        const response = await axios.post(

            'http://4.224.186.213/evaluation-service/auth',

            {

                email: process.env.EMAIL,

                name: process.env.NAME,

                rollNo: process.env.ROLLNO,

                accessCode: process.env.ACCESSCODE,

                clientID: process.env.CLIENT_ID,

                clientSecret: process.env.CLIENT_SECRET

            }

        );


        return response.data.access_token;


    }

    catch(err){

        console.log(
            err.response?.data || err.message
        );

        return null;
    }

}

module.exports = getAccessToken;