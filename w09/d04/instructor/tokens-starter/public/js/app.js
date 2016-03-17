const React          = require('react');
const ReactDOM       = require('react-dom');

const ReactRouter    = require('react-router');
const Router         = ReactRouter.Router;
const Route          = ReactRouter.Route;
const Navigation     = ReactRouter.Navigation;
const Link           = ReactRouter.Link;
const browserHistory = ReactRouter.browserHistory;
var $                = require('jquery');

// helpers
const auth           = require('./auth');
// const helpers        = require('./helpers');

// components
const Nav            = require('./nav')
const Signup         = require('./signup');
const Dashboard      = require('./dashboard');
const About          = require('./about');
const Login          = require('./login');
const Logout          = require('./logout');



const App = React.createClass({
  getInitialState : function() {
    return {
      loggedIn : auth.loggedIn()
    }
  },

  updateAuth : function(loggedIn) {
    this.setState({
      loggedIn: loggedIn
    })
  },

  componentWillMount : function() {
    // this... is some interesting function ref handling. not quite following it though
    auth.onChange = this.updateAuth
    auth.logIn
  },

  render : function() {
    return (
      <div>
        <Nav loggedIn={this.state.loggedIn}/>
        {this.props.children}
      </div>
    )
  }
})

function requireAuth(nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname : '/login',
      state : { nextPathname : nextState.location.pathname }
    })
  }
}

var NotFound = React.createClass({
  render : function() {
    return <h1>404: Not Found... sry</h1>
  }
})

var routes = (
  <Router history={browserHistory} >
    <Route path="/" component={App} >
      <Route path="login" component={Login} />
      <Route path="signup" component={Signup} />
      <Route path="logout" component={Logout} />
      <Route path="about" component={About} />
      <Route path="dashboard" component={Dashboard} onEnter={requireAuth} />
    </Route>
    {/* 404 error   */}
    <Route path="*" component={NotFound} />
  </Router>
)


ReactDOM.render(routes, document.getElementById('container'))
