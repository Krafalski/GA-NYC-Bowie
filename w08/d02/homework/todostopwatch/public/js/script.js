'use strict'



const Task = React.createClass({
  handleClick: function(e) {
    e.preventDefault();
    this.props.toggleTask(this.props.index);
  },

  render: function() {
    return (
      <li className="collection-item">
        <div>
          <strong>{this.props.details.name}</strong> {this.props.details.desc}
          <a href="#" onClick={this.handleClick} className="secondary-content">
            <i className="material-icons">check</i>
          </a>
        </div>
      </li>
    )
  }
})
