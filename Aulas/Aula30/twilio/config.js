const dotenv = require('dotenv');

dotenv.config();

    TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID;
    TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN;
    TWILIO_PHONE_NUMBER: process.env.TWILIO_PHONE_NUMBER;

module.exports = {
    TWILIO_ACCOUNT_SID,
    TWILIO_AUTH_TOKEN,
    TWILIO_PHONE_NUMBER
};