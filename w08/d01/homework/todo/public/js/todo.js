//alert ('time to do stuff!');


const ShowList = React.createClass({
  render : function () {
    return(
      <div>
        <h1> {this.props.toDoItem}</h1>
      </div>
    )
  }
})


const ListBuilder = React.createClass({


  handleSubmit : function (event){
    //prevent default of submit click button
    event.preventDefault()
    // //grab value from input field which has a ref of toDoItem
    var toDoItem = this.refs.todoItem.value
    console.log(toDoItem)
    this.props.setList(toDoItem)
    this.refs.listForm.reset()
  //   this.refs.listForm.reset()
},



  render:function(){
    return(
      <div>
        <h2> A To Do List </h2>
        <form ref="listForm" onSubmit={this.handleSubmit}>
          <div>
            <input type="text" ref="todoItem" placeholder="add to todo list" />
          </div>
          <button type="submit"> Add to Todo List </button>
        </form>
      </div>
    )
  }
})




const App = React.createClass({
  getInitialState: function(){
    return{
      list : ''
    }
  },

  setList : function(listItem){
    this.state.list = listItem
    this.setState({list: this.state.list})
  },

render: function(){

  return(
    <div>
      <ListBuilder setList={this.setList} />
      <ShowList toDoItem={this.state.list}/>
    </div>
  )
}


});



ReactDOM.render(
  <App />, document.getElementById('container')
)
