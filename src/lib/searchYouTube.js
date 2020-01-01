import YOUTUBE_API_KEY from '/src/config/youtube.js';

var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    contentType: 'application/json',
    success: callback,
    error: (error) => { console.log(error); },
    data: options
  });
};

export default searchYouTube;

