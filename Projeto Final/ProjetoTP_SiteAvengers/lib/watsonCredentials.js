const AssitantV1 = require('ibm-watson/assistant/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const assistant = new AssitantV1({
    url: 'https://gateway.watsonplatform.net/assistant/api',
    version: '2020-01-04',
    authenticator: new IamAuthenticator({ apikey: 'cDNGDGxrCoK-jQggqc9Eo_Xx0z9e0PBakSLXUpEq4cPH' })
});

module.exports = { assistant };