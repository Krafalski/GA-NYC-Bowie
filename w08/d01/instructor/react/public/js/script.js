// App Component

// ReactDOM function to diplay our app component

const GreetingBuilder = React.createClass({

  handleSubmit : function(event) {
    event.preventDefault()
    var greeting = this.refs.greeting.value
    var name = this.refs.name.value
    var fullGreeting = `${greeting} ${name}`

    this.props.greeting(fullGreeting)
    this.refs.greetingForm.reset()
  },

  render : function() {
    return (
      <div>
        <form ref="greetingForm" onSubmit={this.handleSubmit}>
          <div>
            <input type="text" ref="greeting" placeholder="Greeting" />
            <input type="text" ref="name" placeholder="Name" />
            </div>
            <button type="submit">Construct Greeting</button>
        </form>
        <h1>{this.props.fullGreeting}</h1>
      </div>
    )
  }
})

const App = React.createClass({
  getInitialState : function() {
    return {
      greeting : ''
    }
  },

  setGreeting : function(fullGreeting) {
    this.state.greeting = fullGreeting
    this.setState({greeting: this.state.greeting})
  },

  render : function() {
    return (
       <div>
        <GreetingBuilder greeting={this.setGreeting} fullGreeting={this.state.greeting}/>
       </div>
    )
  }
})

ReactDOM.render(
  <App />, document.getElementById('container')
)
