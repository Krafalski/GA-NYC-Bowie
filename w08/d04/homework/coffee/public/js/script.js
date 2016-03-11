//alert ('coooooffffeeeeeee');

const Button = React.createClass({
  render: function(){
    return(
      <button onClick={this.props.action}>
      {this.props.name}
      </button>
    );
  }
});



const App = React.createClass({
  getInitialState: function() {
    return {
      coffee: {}
    };
  },
  componentDidMount:function(){
    $.get('/coffee').done( data =>{
      data.forEach( el=> {
        this.state.coffee[el.coffee_id]= el;
      });

      this.setState({coffee:this.state.coffee});
    })
  },

editButtonAction    : function(){
  console.log('this will be the put route')
},
deleteButtonAction  : function(){
  console.log('this will be the delete route')
},
submitButtonAction  : function(){
  var newCoffee ={
    coffee_name: this.refs.coffee_name.value,
    coffee_price: this.refs.coffee_price.value
  }


  console.log('this will be the submit route', newCoffee)

//reset does not work
  // this.refs.coffee_name.reset();
  // this.refs.coffee_price.reset();
},


  render : function (){
    return(
      <div>
      <h1> heyeyeeyeyeyyyyy U want cOfFeE? </h1>
      <input type="text" id="coffee" ref="coffee_name" placeholder="coffee" />
      <input type="text" id="price" ref="coffee_price" placeholder="price" />
      <Button name='Enter New Coffee' action={this.submitButtonAction}/>
      </div>
    )
  }



})


ReactDOM.render(<App />, document.querySelector('#container'));
