var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    contentType: 'application/json',
    success: callback,
    // error: (error) => { console.log(error); },
    data: options
  });
};

export default searchYouTube;

// options = {
//   key: ,
//   max: ,
//   query:
// }


// new file where we call searchYouTube
// searchYoutube({
//   key: key,
//   query: cats,
//   bla: 10,
// }, () => {
//   render data....
// })

