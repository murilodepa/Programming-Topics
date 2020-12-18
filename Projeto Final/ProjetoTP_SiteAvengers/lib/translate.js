const LanguageTranslatorV3 = require('ibm-watson/language-translator/v3');
const { IamAuthenticator } = require('ibm-watson/auth');



const translator = new LanguageTranslatorV3({
    version: '2018-05-01',
    authenticator: new IamAuthenticator({
        apikey: 'TGmf1QopcZYKfn50YOJmqa717mAVibXmcPAGuJGIDMUi',
    }),
    serviceUrl: 'https://api.us-south.language-translator.watson.cloud.ibm.com/instances/bfaa6e27-7f8e-43f5-a549-e82fd32df046',
});

module.exports = { translator };