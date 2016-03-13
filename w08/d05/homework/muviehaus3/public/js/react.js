

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

// const Movie = React.createClass({
//   render: function(){
//     var movie;
//     return (
//       <li> {this.props.details.title}</li>
//     )
//   }
// })
//
// const MovieList = React.createClass({
//   render: function(){
//     return( <div> movies<div/>)
//   }
//
// })

const App = React.createClass({
  getInitialState: function() {
    return {movies:{}};
  },
  componentDidMount : function(){
    $.get('/movies').done( data =>{
      data.forEach( el=> {
        this.state.movies[el.id]= el;
      });

      this.setState({movies:this.state.movies});
    });
  },

  renderMovie : function (key){
    return (
      <Movie key={key} index={key} details={this.state.movies[key]} />
    )
  },

      render : function (){
console.log(this.state.movies)
        return(
          <div>

            <h1> Hello World! </h1>
            <MovieSearch />



          </div>
        )
    }

})

ReactDOM.render(<App />, document.querySelector('#container'));
