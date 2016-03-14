
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
    console.log("i clickedit!", this.props.movie);
    var movieId = this.props.movie.id;
    this.state.movies = this.props.movie;
    this.setState({movies:this.state.movie});},
  render : function () {
    console.log(this.props.movie.img_url, 'in movie row')
    return(
      <div onClick={this.handleSubmit}>
      <li> {this.props.movie.title}</li>
      <img src={this.props.movie.img_url} />
      </div>
    )
  }
})
const MovieList = React.createClass({
  render: function (){
   var movies = this.props.details.movies;
    return(

      <ul>
        <MovieRow movie={this.props.details} />
      </ul>
    )
}
})

const MuvieHausBanner = React.createClass({
    handleClick : function (event){
      event.preventDefault();
      console.log ('yay click!')
    $.get('/movies').done( data =>{
      data.forEach( el=> {
        this.state.movies[el.id]= el;
      });
      this.setState({movies:this.state.movies});
    })},
      render : function (){
      return(  <h1 onClick={this.handleClick}> MüvieHaus</h1>)
  }
  }
)

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
  /* This is added by Arthur*/
  renderMovie: function(key){
    return(
      <MovieList details={this.state.movies[key]} />
    )
  },
  render : function (){
        console.log(this.state.movies , ' in App')
        return(
          <div>
            <MuvieHausBanner />
            <MovieSearch movies={this.state.movies}/>
            {/* Arthor added this... */}
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
