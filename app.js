var YOUTUBE_BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

function getDataFromApi(searchTerm, callback) {
    var query = gapi.client.youtube.search.list({
        q: searchTerm,
        part: 'snippet',
        key: 'AIzaSyD1oq6ahRUvelQP2N5bv8JzbWovxQNrhY0'
    });
    $.getJSON(YOUTUBE_BASE_URL, query, callback);
}

function displayYoutubeSearchData(data) {
    var resultElement = '';
    if (data.Search) {
        data.Search.forEach(function(item) {
            resultElement += '<p>' + item.Title + '</p>';
        });
    }
    else {
        resultElement += '<p>No results</p>';
    }

}

function watchSubmit() {
    $('.search-form').submit(function(e) {
        e.preventDefault();
        var query = $(this).find('.query').val();
        getDataFromApi(query, displayYoutubeSearchData);
    });
}

$(function() {watchSubmit();});