
//alert ('I want popcorn');
// const Button = React.createClass ({
//   render: function(){
//     return (
//       <button onclick={this.props.action}>
//         {this.props.name}
//       </button>
//     );
// }
// });
//
//
// const MovieSearch = React.createClass ({
//   handleSubmit : function (event){
//     event.preventDefault();
//     console.log ('i clicked it!')
//
//     var searchText = {
//       searchText : this.refs.searchText.value
//     }
//     console.log(searchText);
//     this.refs.movieSearch.reset()
//   },
//   render: function () {
//
//     return (
//       <form ref="movieSearch" onSubmit={this.handleSubmit} >
//         <input type="text" id="search" ref="searchText" placehoder="Search movies" />
//         <Button name='Search' action={this.submit}/>
//       </form>
//     )
//   }
// })

const Movie = React.createClass({
  render: function(){
    return (
      <li> {this.props.details.title}</li>
    )
  }
})

const MovieList = React.createClass({
  renderMovie: function(key){
    return( < Movie key={key} index={key} details={this.state.Movie[key]} />)
  },



  render: function (){
   var movies = this.props.movies;

   console.log(movies, "in movie list")


    return(
      <ul className ="movie-list">
      {Object.keys(this.state.movies).map(this.renderMovie)}
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

        return(
          <div>

            <h1> Hello World! </h1>
            <MovieSearch />
            <MovieList movies={this.state.movies} />


          </div>
        )
    }

})

ReactDOM.render(<App />, document.querySelector('#container'));
