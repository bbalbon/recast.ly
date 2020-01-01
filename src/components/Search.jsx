var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" id="input"/>
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search" onClick={() =>{
        let inputText = document.getElementById('input').value;
        props.click(inputText);
      }}></span>
    </button>
  </div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
