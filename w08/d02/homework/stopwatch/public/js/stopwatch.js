(function() {
  'use strict';

}());
//alert ('Alright, STOP It is hammertime!');

const StartStop = React.createClass({
  render: function (){
      return (
        <div><button>StartStop</button></div>
    )
  }
})

const Reset = React.createClass({
  render:function (){
    return (
      <div><button>Reset</button></div>
    )
  }
})

const Timer = React.createClass({
  render:function(){
    return(
      <div>TIMER!</div>
    )
  }
})


const App = React.createClass({
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
