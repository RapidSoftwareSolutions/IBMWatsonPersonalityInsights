module.exports.do = function(req, res){
    res.status(200).send({
        'package': 'IBMWatsonPersonalityInsights',
        "tagline": "IBMWatsonPersonalityInsights API Package",
        "keywords": ["API"],
        "description": "Enables applications to derive insights from social media, enterprise data, or other digital communications.",
        'image': 'https://avatars0.githubusercontent.com/u/9221727?v=3&s=200',
        'repo': 'https://github.com/RapidSoftwareSolutions/Marketplace-IBMWatsonPersonalityInsights-Package',
        'accounts': {
            "domain": "https://www.ibm.com/watson?ref=rapidapi",
            "credentials": ["username", "password"]
        },
        'blocks': [{
            "name":"getProfileByJson",
            "description": "Generates a personality profile for the author of the input text. The service accepts a maximum of 20 MB of input content. It can analyze text in Arabic, English, Japanese, or Spanish and return its results in a variety of languages.",
            "args":[
                {
                    name: "username",
                    type: "credentials",
                    info: "Username obtained from IBM Bluemix.",
                    required: true
                },
                {
                    name: "password",
                    type: "credentials",
                    info: "Password obtained from IBM Bluemix.",
                    required: true
                },
                {
                    name: "language",
                    type: "String",
                    info: "The language of the input text for the request:`ar` (Arabic), `en` (English, the default), `es` (Spanish), `ja` (Japanese)",
                    required: false
                },
                {
                    name: "responseLanguage",
                    type: "String",
                    info: "The desired language of the response: `ar` (Arabic); `de` (German); `en` (English, the default); `es` (Spanish); `fr` (French); `it` (Italian); `ja` (Japanese); `ko` (Korean); `pt-br` (Brazilian Portuguese); `zh-cn` (Simplified Chinese); `zh-tw` (Traditional Chinese)",
                    required: false
                },
                {
                    name: "rawScores",
                    type: "Boolean",
                    info: "Indicates whether a raw score in addition to a normalized percentile is to be returned for each characteristic; raw scores are not compared with a sample population. By default (false), only normalized percentiles are returned.",
                    required: false
                },
                {
                    name: "consumptionPreferences",
                    type: "String",
                    info: "Indicates whether consumption preferences are to be returned with the results. By default (false), they are not.",
                    required: false
                },
                {
                    name: "version",
                    type: "String",
                    info: "The requested version of the response format as a date in the form YYYY-MM-DD; for example, specify 2016-10-20 for October 20, 2016. The parameter allows the service to update its response format for new versions without breaking existing clients.",
                    required: true
                },
                {
                    name: "contentItems",
                    type: "JSON",
                    info: "An array of ContentItem objects that provides the input text for the request. See README for more info.",
                    required: true
                }
            ], 
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }, {
            "name":"getProfileByPlainText",
            "description": "Generates a personality profile for the author of the input text. The service accepts a maximum of 20 MB of input content. It can analyze text in Arabic, English, Japanese, or Spanish and return its results in a variety of languages.",
            "args":[
                {
                    name: "username",
                    type: "credentials",
                    info: "Username obtained from IBM Bluemix.",
                    required: true
                },
                {
                    name: "password",
                    type: "credentials",
                    info: "Password obtained from IBM Bluemix.",
                    required: true
                },
                {
                    name: "language",
                    type: "String",
                    info: "The language of the input text for the request:`ar` (Arabic), `en` (English, the default), `es` (Spanish), `ja` (Japanese)",
                    required: false
                },
                {
                    name: "responseLanguage",
                    type: "String",
                    info: "The desired language of the response: `ar` (Arabic); `de` (German); `en` (English, the default); `es` (Spanish); `fr` (French); `it` (Italian); `ja` (Japanese); `ko` (Korean); `pt-br` (Brazilian Portuguese); `zh-cn` (Simplified Chinese); `zh-tw` (Traditional Chinese)",
                    required: false
                },
                {
                    name: "rawScores",
                    type: "Boolean",
                    info: "Indicates whether a raw score in addition to a normalized percentile is to be returned for each characteristic; raw scores are not compared with a sample population. By default (false), only normalized percentiles are returned.",
                    required: false
                },
                {
                    name: "consumptionPreferences",
                    type: "String",
                    info: "Indicates whether consumption preferences are to be returned with the results. By default (false), they are not.",
                    required: false
                },
                {
                    name: "version",
                    type: "String",
                    info: "The requested version of the response format as a date in the form YYYY-MM-DD; for example, specify 2016-10-20 for October 20, 2016. The parameter allows the service to update its response format for new versions without breaking existing clients.",
                    required: false
                },
                {
                    name: "text",
                    type: "String",
                    info: "Text body. A maximum of 20 MB of content to be analyzed.",
                    required: false
                }
            ], 
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }, {
            "name":"getProfileByHtml",
            "description": "Generates a personality profile for the author of the input text. The service accepts a maximum of 20 MB of input content. It can analyze text in Arabic, English, Japanese, or Spanish and return its results in a variety of languages.",
            "args":[
                {
                    name: "username",
                    type: "credentials",
                    info: "Username obtained from IBM Bluemix.",
                    required: true
                },
                {
                    name: "password",
                    type: "credentials",
                    info: "Password obtained from IBM Bluemix.",
                    required: true
                },
                {
                    name: "language",
                    type: "String",
                    info: "The language of the input text for the request:`ar` (Arabic), `en` (English, the default), `es` (Spanish), `ja` (Japanese)",
                    required: false
                },
                {
                    name: "responseLanguage",
                    type: "String",
                    info: "The desired language of the response: `ar` (Arabic); `de` (German); `en` (English, the default); `es` (Spanish); `fr` (French); `it` (Italian); `ja` (Japanese); `ko` (Korean); `pt-br` (Brazilian Portuguese); `zh-cn` (Simplified Chinese); `zh-tw` (Traditional Chinese)",
                    required: false
                },
                {
                    name: "rawScores",
                    type: "Boolean",
                    info: "Indicates whether a raw score in addition to a normalized percentile is to be returned for each characteristic; raw scores are not compared with a sample population. By default (false), only normalized percentiles are returned.",
                    required: false
                },
                {
                    name: "consumptionPreferences",
                    type: "String",
                    info: "Indicates whether consumption preferences are to be returned with the results. By default (false), they are not.",
                    required: false
                },
                {
                    name: "version",
                    type: "String",
                    info: "The requested version of the response format as a date in the form YYYY-MM-DD; for example, specify 2016-10-20 for October 20, 2016. The parameter allows the service to update its response format for new versions without breaking existing clients.",
                    required: false
                },
                {
                    name: "html",
                    type: "String",
                    info: "Html body. A maximum of 20 MB of content to be analyzed.",
                    required: false
                }
            ], 
            'callbacks':[{'name':'error','info':'Error'}, {'name':'success','info':'Success'}]
        }]
    })
};
