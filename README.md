# IBMWatsonPersonalityInsights Package
The IBM Watson™ Personality Insights service enables applications to derive insights from social media, enterprise data, or other digital communications.
* Domain: https://www.ibm.com/watson
* Credentials: username, password

## How to get credentials: 
0. Register to [IBM Bluemix Console](https://console.ng.bluemix.net/registration/) 
1. After log in choose Natural Language Classifier from [services](https://console.ng.bluemix.net/catalog/?category=watson)
2. Connect Natural Language Classifier to your application at the left side, choose pricing plan and click on 'Create' button at the bottom of the page.
3. Click on 'Service Credentials' tab to see your username and password.

## IBMWatsonPersonalityInsights.getProfileByJson
Generates a personality profile for the author of the input josn. The service accepts a maximum of 20 MB of input content. It can analyze text in Arabic, English, Japanese, or Spanish and return its results in a variety of languages.

| Field                 | Type       | Description
|-----------------------|------------|----------
| username              | credentials| Username obtained from IBM Bluemix.
| password              | credentials| Password obtained from IBM Bluemix.
| language              | String     | The language of the input html for the request:`ar` (Arabic), `en` (English, the default), `es` (Spanish), `ja` (Japanese)
| responseLanguage      | String     | The desired language of the response: `ar` (Arabic); `de` (German); `en` (English, the default); `es` (Spanish); `fr` (French); `it` (Italian); `ja` (Japanese); `ko` (Korean); `pt-br` (Brazilian Portuguese); `zh-cn` (Simplified Chinese); `zh-tw` (Traditional Chinese)
| rawScores             | Boolean    | Indicates whether a raw score in addition to a normalized percentile is to be returned for each characteristic; raw scores are not compared with a sample population. By default (false), only normalized percentiles are returned.
| consumptionPreferences| String     | Indicates whether consumption preferences are to be returned with the results. By default (false), they are not.
| version               | String     | The requested version of the response format as a date in the form YYYY-MM-DD; for example, specify 2016-10-20 for October 20, 2016. The parameter allows the service to update its response format for new versions without breaking existing clients.
| contentItems          | JSON       | An array of ContentItem objects that provides the input html for the request. See README for more info.

#### `contentItems` field example: 
```json
"contentItems": [{
	"id": "text_1",
	"text": "some data ..."
}]
```

#### `contentItems` item format: 

| Field       | Type       | Description
|-------------|------------|----------
| content     | String     | Required: A maximum of 20 MB of content (combined across all ContentItem objects) to be analyzed.
| id          | String     | A unique identifier for this content item.
| created     | Number     | A timestamp that identifies when this content was created. Specify a value in milliseconds since the UNIX Epoch (January 1, 1970, at 0:00 UTC). Required only for results that include temporal behavior data.
| updated     | Number     | A timestamp that identifies when this content was last updated. Specify a value in milliseconds since the UNIX Epoch (January 1, 1970, at 0:00 UTC). Required only for results that include temporal behavior data.
| contenttype | String     | The MIME type of the content: `text/plain` or `text/html`
| language    | String     | The language of the content as a two-letter ISO 639-1 identifier: `ar` (Arabic), `en` (English, the default), `es` (Spanish), `ja` (Japanese
| parentid    | String     | The unique ID of the parent content item for this item. Used to identify hierarchical relationships between posts/replies, messages/replies, and so on.
| reply       | Boolean    | Indicates whether this content item is a reply to another content item.
| forward     | Boolean    | Indicates whether this content item is a forwarded/copied version of another content item.

## IBMWatsonPersonalityInsights.getProfileByPlainText
Generates a personality profile for the author of the input text. The service accepts a maximum of 20 MB of input content. It can analyze text in Arabic, English, Japanese, or Spanish and return its results in a variety of languages.

| Field                 | Type       | Description
|-----------------------|------------|----------
| username              | credentials| Username obtained from IBM Bluemix.
| password              | credentials| Password obtained from IBM Bluemix.
| language              | String     | The language of the input text for the request:`ar` (Arabic), `en` (English, the default), `es` (Spanish), `ja` (Japanese)
| responseLanguage      | String     | The desired language of the response: `ar` (Arabic); `de` (German); `en` (English, the default); `es` (Spanish); `fr` (French); `it` (Italian); `ja` (Japanese); `ko` (Korean); `pt-br` (Brazilian Portuguese); `zh-cn` (Simplified Chinese); `zh-tw` (Traditional Chinese)
| rawScores             | Boolean    | Indicates whether a raw score in addition to a normalized percentile is to be returned for each characteristic; raw scores are not compared with a sample population. By default (false), only normalized percentiles are returned.
| consumptionPreferences| String     | Indicates whether consumption preferences are to be returned with the results. By default (false), they are not.
| version               | String     | The requested version of the response format as a date in the form YYYY-MM-DD; for example, specify 2016-10-20 for October 20, 2016. The parameter allows the service to update its response format for new versions without breaking existing clients.
| text                  | String     | Text body. A maximum of 20 MB of content to be analyzed.

## IBMWatsonPersonalityInsights.getProfileByHtml
Generates a personality profile for the author of the input html. The service accepts a maximum of 20 MB of input content. It can analyze html text in Arabic, English, Japanese, or Spanish and return its results in a variety of languages.

| Field                 | Type       | Description
|-----------------------|------------|----------
| username              | credentials| Username obtained from IBM Bluemix.
| password              | credentials| Password obtained from IBM Bluemix.
| language              | String     | The language of the input html for the request:`ar` (Arabic), `en` (English, the default), `es` (Spanish), `ja` (Japanese)
| responseLanguage      | String     | The desired language of the response: `ar` (Arabic); `de` (German); `en` (English, the default); `es` (Spanish); `fr` (French); `it` (Italian); `ja` (Japanese); `ko` (Korean); `pt-br` (Brazilian Portuguese); `zh-cn` (Simplified Chinese); `zh-tw` (Traditional Chinese)
| rawScores             | Boolean    | Indicates whether a raw score in addition to a normalized percentile is to be returned for each characteristic; raw scores are not compared with a sample population. By default (false), only normalized percentiles are returned.
| consumptionPreferences| String     | Indicates whether consumption preferences are to be returned with the results. By default (false), they are not.
| version               | String     | The requested version of the response format as a date in the form YYYY-MM-DD; for example, specify 2016-10-20 for October 20, 2016. The parameter allows the service to update its response format for new versions without breaking existing clients.
| html                  | String     | Html body. A maximum of 20 MB of content to be analyzed.

