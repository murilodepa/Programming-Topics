var express = require('express');
var router = express.Router();

const ibmWatson = require('../lib/watsonCredentials');

router.post('/assistant', function(req, res, next) {

    var { text, contextDialog } = req.body;

    context = JSON.parse(contextDialog);

    const params = {
        input: { text },
        workspaceId: 'a604f2f8-2452-4d30-aaa9-3029836bec75',
        context
    };
    ibmWatson.assistant.message(
        params,
        function(err, response) {
            if (err) res.json({ status: 'ERRO', data: err.toString() });
            else res.json({ status: 'OK', data: response });
        }
    );
});


module.exports = router;