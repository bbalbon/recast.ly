import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '/src/data/exampleVideoData.js';
import searchYouTube from '/src/lib/searchYoutube.js';
import YOUTUBE_API_KEY from '/src/config/youtube.js';

// searchYouTube({ part: 'snippet', key: YOUTUBE_API_KEY, query: 'cats', max: 10, type: 'video', videoEmbeddable: true}, (data) => {
//   console.log(data);
// });

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: exampleVideoData,
      current: exampleVideoData[0]
    };
  }

  componentDidMount() {
    searchYouTube({}, (data) => {
      this.setState({
        videos: data.items,
        current: data.items[0]
      });
    });
  }

  playVideo (video) {
    this.setState({
      current: video
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            {/* <Search /> */}
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.current}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} click={this.playVideo.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }

}

export default App;

