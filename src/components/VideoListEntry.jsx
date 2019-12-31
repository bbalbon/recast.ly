var VideoListEntry = (props) => (
  <div className="video-list-entry media">
    { console.log(props) }
    <div className="media-left media-middle">
      <img className="media-object" src="https://i.ytimg.com/vi/1w8Z0UOXVaY/default.jpg" alt="" />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title">{props.title}</div>
      <div className="video-list-entry-detail">{props.description}</div>
    </div>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
// VideoListEntry.propTypes = {
//   video: React.PropTypes.object.isRequired
// };

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;


{/* <VideoListEntry props={{
  title: video.snippet.title,
  description: video.snippet.description,
  thumbnail: video.snippet.thumbnails.medium.url
}}/>;

<VideoListEntry props={{video.snippet.title, video.snippet.description, video.snippet.thumbnails.medium.url}}/>; */}