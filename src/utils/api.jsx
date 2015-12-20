var  rootUrl = "https://api.imgur.com/3/";
var apiKey = 'cf1aabc015000c0';

var Api = window.api = {
    get: function (url) {
        return fetch(rootUrl + url, {
           headers: {
               'Authorization' : 'Client-ID ' + apiKey
           }
        })
        //pretvori podatke u json...
        .then(function (response) {
                return response.json()
        });
    }
};

module.exports = Api;

