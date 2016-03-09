(function() {
  'use strict';

}());
//alert ('Alright, STOP It is hammertime!');

const StartStop = React.createClass({
  handleSubmit: function(event){
    event.preventDefault();
    console.log('startstopstartstopstartstop');
  },

  render: function (){
      return (
        <div><form onSubmit={this.handleSubmit}><button
              type="submit"

        >StartStop</button></form></div>
    )
  }
})

const Reset = React.createClass({
  handleSubmit: function (event){
    event.preventDefault();
    console.log('RRRRRRESET!');
  },

  render:function (){
    return (
      <div><form onSubmit={this.handleSubmit}><button ref="reset" type="submit">Reset</button></form></div>
    )
  }
})

const Timer = React.createClass({
  render:function(){
    return(
      <div ref="timer">TIMER!</div>
    )
  }
})


const App = React.createClass({
  getInitialState : function(){
    return{
      stop: true,
      time: 0
    }
  },
  render: function () {
    return(
      <div>
        <StartStop />
        <Reset />
        <Timer />
        <h1> Hello World! </h1>
      </div>
    )
  }
})

ReactDOM.render (<App />, document.querySelector('#container'))
