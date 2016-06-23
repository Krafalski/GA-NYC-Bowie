const Coffee = React.createClass({
  //render one coffee with price to be passed to CoffeeList

  render: function (){
    console.log(this.props, ' in Coffee')
    return(
      <li key={this.props.coffee_id}> {this.props.coffeeData}</li>
    )
  }
});


const CoffeeList = React.createClass({



    render : function (){
      var coffeeData = this.props.coffee;
        console.log(coffeeData.id + " in coffee list")
    return (
     <p>sigh</p>
    )
  }})
  // <Coffee key={el.coffee_id} coffeeData={el}/>
  // pull from Coffee Row and make a list of all the coffees
  // render: function(){
  //   var result = this.props.coffee;
  //   console.log(result);
  //   return(
  //     <ol>
  //       Coffee List
  //       {
  //         Object.keys(result).map(this.renderLi)
  //       }
  //     </ol>
  //   )
  // }
// })

const CoffeeForm = React.createClass({
  handleSubmit : function (event){
    event.preventDefault();

    var newCoffee ={
      coffee_name: this.refs.coffee_name.value,
      coffee_price: this.refs.coffee_price.value
    }

    this.props.addCoffee(newCoffee)
    this.refs.coffeeForm.reset()
  },
  render: function (){
    return(
      <form ref="coffeeForm" onSubmit={this.handleSubmit}>
        <input type="text" id="coffee" ref="coffee_name" placeholder="coffee" />
        <input type="text" id="price" ref="coffee_price" placeholder="price" />
        <button name='Enter New Coffee'>submit</button>
      </form>
    )
  }
})


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

  addCoffee  : function(newCoffee){
      $.post('/coffee', newCoffee)
        .done( () => {
          this.state.coffee['sd'] = newCoffee
        })
        this.setState({coffee: this.state.coffee});
  },

  render : function() {
    return(
      <div>
        <h6>coffee </h6>
        {/* Our components are kind of like the following:
            1. fancy html elements with props (an object) written
            as html attributes
            2. constructor functions
              new CoffeeForm(this.addCoffee)
                this.props = {}
                this.props[arg1] = arg1

        */}
        <CoffeeForm addCoffee={this.addCoffee}/>
        <CoffeeList coffee={this.state.coffee}/>
        {/*<CoffeeList coffee={this.state.coffee} />*/}
      </div>
    )
  }
})


ReactDOM.render(<App />, document.querySelector('#container'));
