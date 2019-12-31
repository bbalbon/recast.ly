import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '/src/data/exampleVideoData.js';

var App = () => (
  <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        {/* <Search /> */}
        <div><h5><em>search</em> view goes here</h5></div>
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        {/* <VideoPlayer /> */}
        <VideoPlayer video={exampleVideoData[0]}/>
        {/* implement function here that the onClick method invokes */}
        {/* this function invokes videoPlayer with the video object passed in */}
      </div>
      <div className="col-md-5">
        <VideoList videos={exampleVideoData}/>
      </div>
    </div>
  </div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

