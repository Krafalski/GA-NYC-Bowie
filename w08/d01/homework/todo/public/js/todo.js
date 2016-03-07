//alert ('time to do stuff!');

var todos =
[{task: 'walk the dog', done:'false'},
{task: 'do laundry', done:'false'},
{task: 'buy milk', done:'false'},
{task: 'give cat medication', done:'false'},
{task: 'sort mail', done:'false'}];




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
