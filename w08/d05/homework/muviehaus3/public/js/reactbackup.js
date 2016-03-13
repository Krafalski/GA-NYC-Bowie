//alert ('I want popcorn');
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

const MovieRow = React.createClass({
  render : function () {
    console.log(this.props.movie, 'in movie row')
    return(
      <li> {this.props.movie}</li>
    )
  }
})

const MovieList = React.createClass({

  render: function (){
   var movies = this.props;

   console.log(movies, "in movie list")


    return(
      <ul>
      <MovieRow movie={this.props.movie} />
      </ul>
    )
}
})

const App = React.createClass({
  getInitialState: function() {
    return {movies:{}};
  },
  componentWillMount : function(){
    $.get('/movies').done( data =>{
      data.forEach( el=> {
        this.state.movies[el.id]= el;
      });

      this.setState({movies:this.state.movies});
    });
  },

      render : function (){
        console.log(this.state.movies , ' in App')
        return(
          <div>

            <h1> Hello World! </h1>
            <MovieSearch />
            <MovieList movies={this.props.movies} />


          </div>
        )
    }

})

ReactDOM.render(<App />, document.querySelector('#container'));
