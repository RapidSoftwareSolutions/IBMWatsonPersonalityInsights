const Q       = require('q');
const lib     = require('../lib/functions.js');
const request = require('request');

module.exports = (req, res) => {
    const defered = Q.defer();

    req.body.args = lib.clearArgs(req.body.args);

    let { 
        username,
        password,
        language,
        responseLanguage,
        rawScores,
        consumptionPreferences,
        version,
        html
    } = req.body.args;
        
    let required = lib.parseReq({username, password, html, version});

    if(required.length > 0) 
        throw new RapidError('REQUIRED_FIELDS', required);

    let qs = lib.clearArgs({
        version: version,
        raw_scores: rawScores,
        consumption_preferences: consumptionPreferences
    });

    let headers = lib.clearArgs({
        'Accept': 'application/json',
        'Content-Type': 'text/html',
        'Accept-Language': responseLanguage,
        'Content-Language': language
    });

    request({
        qs,
        headers,
        uri: 'https://gateway.watsonplatform.net/personality-insights/api/v3/profile',
        method: 'POST',
        body: html
    }, (err, response, reslut) => {
        if(!err && (/20.*/).test(response.statusCode))  
            defered.resolve(lib.safeParse(reslut));
        else 
            defered.reject(lib.safeParse(err || reslut || response.statusCode));
    }).auth(username, password, false);

    return defered.promise;
}