// console.log ('linked js');

//app component

//reactDOM function to display our app component


/* remove the h1 from greeting builder
remove the prop from the render in Greeting builderbuild a component that does the above instead this component will be a child of app and a sybling of greeting builder and it will render and h1 with the state of app, passed as a prop */
const GreetingResponse = React.createClass({
  render: function (){
    return(
      <div>
        <h1>{this.props.fullGreeting}</h1>
      </div>
    )
  }
})


const GreetingBuilder = React.createClass({

  handleSubmit : function (event){
    event.preventDefault()
    var name = this.refs.name.value
    var greeting = this.refs.greeting.value
    var fullGreeting = `${greeting} ${name}`

    this.props.greeting(fullGreeting)
    this.refs.greetingForm.reset()

  },

  render : function (){
    return (
      <div>
        <form ref="greetingForm" onSubmit={this.handleSubmit}>
          <div>
            <input type="text" ref="greeting" placeholder="greeting" />
            <input type="text" ref="name" placeholder="name" />
          </div>
          <button type="submit"> Construct Greeting </button>
        </form>
      </div>
    )
  }
})

const App = React.createClass({
  getInitialState: function(){
    return {
      greeting : ''
    }
  },

  setGreeting : function(fullGreeting){
    this.state.greeting = fullGreeting
    this.setState({greeting: this.state.greeting})
  },


  render: function() {

return (
    <div>
      <GreetingBuilder greeting={this.setGreeting} />
      <GreetingResponse fullGreeting={this.state.greeting} />
    </div>
  )
  }
})

ReactDOM.render(
  <App />, document.getElementById('container')
)
