var YOUTUBE_BASE_URL = 'https://www.googleapis.com/youtube/v3/search ';

function getDataFromApi(searchTerm, callback) {
    var query = {
        s: searchTerm,
        r: 'json'
    };
    $.getJSON(YOUTUBE_BASE_URL, query, callback);
}