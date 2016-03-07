//alert ('time to do stuff!');

const ListBuilder = React.createClass({
  render:function(){
    return(
      <h2> A smaller hello world! </h2>
    )
  }
})




const App = React.createClass({
  getInitialState: function(){
    return{
      list : ''
    }
  },

render: function(){

  return(
    <div>
      <ListBuilder />
    </div>
  )
}


});



ReactDOM.render(
  <App />, document.getElementById('container')
)
