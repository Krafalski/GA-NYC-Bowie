'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var Timer = require('./components/timer.js');

let App = React.createClass({
  render: function() {
    return (
        <div>
                <Timer name='First React Timer'/>
                <Timer name='Second React Timer'/>
                <Timer name='Third React Timer'/>
        </div>
    );
  }
});

let $container = document.getElementById('container');
ReactDOM.render(<App />, $container);

