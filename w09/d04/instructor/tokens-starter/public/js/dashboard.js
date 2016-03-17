'use strict';
const React = require('react');
const auth  = require('./auth');
const $ = require('jquery');

const Dashboard = React.createClass({
  getInitialState : function() {
    return {
      me: ''
    }
  },
  seeMe : function(e) {
    e.preventDefault()

    $.ajax({
      url: 'users/me',
      beforeSend: function( xhr ) {
        xhr.setRequestHeader("Authorization", "Bearer " + auth.getToken() );
      }
    }).done((data) => {
      this.setState({me: data.agent.email})
    })
  },

  render : function() {
    const token = auth.getToken()
    return (
      <div>
        <h1>Dashboard</h1>
        <p>You made it!</p>
        <p>{token}</p>
        <p>{this.state.me}</p>
        <button onClick={this.seeMe}> see your info</button>
      </div>
    )
  }
})

module.exports = Dashboard;
