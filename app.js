var YOUTUBE_BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

function getDataFromApi(searchTerm, callback) {
    var query = {
        q: searchTerm,
        part: 'snippet',
        key: 'AIzaSyD1oq6ahRUvelQP2N5bv8JzbWovxQNrhY0',
        type: 'video'
    };
    $.getJSON(YOUTUBE_BASE_URL, query, callback);
}

function displayYoutubeSearchData(data) {
    var resultElement = '';
    if (data.items.length > 0) {
        data.items.forEach(function(item) {
            resultElement += '<a href="https://youtube.com/watch?v=' + item.id.videoId + '"><img src="' + item.snippet.thumbnails.medium.url + '"></a>';
        });
    }
    else {
        resultElement += '<p>No results</p>';
    }
    $('.search-results').html(resultElement);
}

function watchSubmit() {
    $('.search-form').submit(function(e) {
        e.preventDefault();
        var query = $(this).find('.query').val();
        getDataFromApi(query, displayYoutubeSearchData);
    });
}

$(function() {watchSubmit();});