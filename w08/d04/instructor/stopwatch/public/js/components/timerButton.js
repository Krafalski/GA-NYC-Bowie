var React = require('react');

const TimerButton = React.createClass({
  render: function() {
    return (
        <button onClick={this.props.action}>
        {this.props.name}
        </button>
    );
  }
});

module.exports = TimerButton;
