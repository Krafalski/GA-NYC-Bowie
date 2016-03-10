var React = require('react');

var TimerButton = require('./timerButton');

var Display = require('./display.js');


const Timer = React.createClass({
  getInitialState: function() {
    return {
      time: 0
    }; 
  },

  start: function() {
    if (!this.timerId) {
      this.timerId = setInterval(() => {
        this.tick();
      }, 100);
    }
  },

  stop: function() {
    clearInterval(this.timerId);
    delete this.timerId;
  },

  reset: function() {
    this.state.time = 0;
    this.setState({time: this.state.time});
  },

  tick: function() {
    this.state.time += 0.1;
    this.setState({time: this.state.time});
  },

  
  
  render: function() {

    let style = {
      textAlign: 'center',
      width: '127px',
      border: '1px solid black'
    };
    
    return(
        <div style={style}>
        <p>{this.props.name}</p>
        <Display time={this.state.time} />
        <TimerButton name='Start' action={this.start}/>
        <TimerButton name='Stop' action={this.stop}/>
        <TimerButton name='Reset' action={this.reset}/>
        </div>
    );
  }
});

module.exports = Timer;
