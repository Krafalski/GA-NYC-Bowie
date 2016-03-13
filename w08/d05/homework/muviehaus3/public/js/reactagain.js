

const Button = React.createClass ({
  render: function(){
    return (
      <button onclick={this.props.action}>
        {this.props.name}
      </button>
    );
}
});
const MovieSearch = React.createClass ({
  handleSubmit : function (event){
    event.preventDefault();
    console.log ('i clicked it!')
    var searchText = {
      searchText : this.refs.searchText.value
    }
    console.log(searchText);
    this.refs.movieSearch.reset()
  },
  render: function () {
    return (
      <form ref="movieSearch" onSubmit={this.handleSubmit} >
        <input type="text" id="search" ref="searchText" placehoder="Search movies" />
        <Button name='Search' action={this.submit}/>
      </form>
    )
  }
})
//http://stackoverflow.com/questions/31567729/how-to-create-dynamic-href-in-react-render-function
const MovieRow = React.createClass({
  handleSubmit : function(event){
    console.log("i clickedit!")
  },
  render : function () {
    console.log(this.props.movie.img_url, 'in movie row')
    return(
      <div>
      <a href={'movies/'+this.props.movie.id} onClick={this.handleSubmit}><li> {this.props.movie.title}</li>
      <img src={this.props.movie.img_url} />
      </a></div>
    )
  }
})
const MovieList = React.createClass({
  render: function (){
   var movies = this.props.details.movies; //I changed this from this.props.movies;
  //  if (movies===undefined){
  //    return (<h1> arg! </h1>)}
  //  console.log(movies, "in movie list")
    return(

      <ul>
        <MovieRow movie={this.props.details} />
      </ul>
    )
}
})
const App = React.createClass({
  getInitialState: function() {
    return {
      movies: {}
    };
  },
  componentWillMount : function(){
    $.get('/movies').done( data =>{
      data.forEach( el=> {
        this.state.movies[el.id]= el;
      });
      this.setState({movies:this.state.movies});
    })
  },
  /* This is added */
  renderMovie: function(key){
    return(
      <MovieList details={this.state.movies[key]} />
    )
  },
  render : function (){
        console.log(this.state.movies , ' in App')
        return(
          <div>
            <h1> Hello World! </h1>
            <MovieSearch />
            {/*<MovieList movies={this.state.movies} />*/}
            {/* I added this... */}
            <ul>
              {Object.keys(this.state.movies)
                .map(this.renderMovie)}
            </ul>
            {/* - - - */}
          </div>
        )
    }
})
ReactDOM.render(<App />, document.querySelector('#container'));
