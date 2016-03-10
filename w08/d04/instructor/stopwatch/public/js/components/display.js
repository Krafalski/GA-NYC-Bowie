var React = require('react');

const Display = React.createClass({
  render: function() {
    
    let style = {
      fontSize: 'large',
      margin: '10px 0px',
      color: this.props.time > 10 ? 'red' : 'green'
    };
    
    return (
        <div style={style}>
        {this.props.time.toFixed(1)}
        </div>
    );
  }
});

module.exports = Display;
