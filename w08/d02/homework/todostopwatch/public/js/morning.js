//app
//alert ('linked');

const App = React.createClass({
  getInitialState: function() {
    return {
      tasks: {}
    }
  },

  setTask: function(x) {
    // generate new timestamp for unique tasks
    let timestamp = (new Date()).getTime();
    // add new task to state
    this.state.tasks[`task-${timestamp}`] = x;
    this.setState({ tasks: this.state.tasks });
  },

  toggleTask: function(key) {
    this.state.tasks[key].completed = !this.state.tasks[key].completed;
    this.setState({ tasks: this.state.tasks });
  },

  renderTask: function(key) {
    return (
      <Task key={key} index={key} details={this.state.tasks[key]} toggleTask={this.toggleTask} />
    )
  },

  filterNotComplete: function(key) {
    return !(this.state.tasks[key].completed);
  },

  filterComplete: function(key) {
    return this.state.tasks[key].completed;
  },

  render: function() {
    return (
      <div className="container">
      <div className="row">
        <section className="col s12">
          <section id="todo-display" className="col s7">
            <ul className="collection with-header">
              <li className="collection-header">
                <h4>Tasks</h4></li>
                {Object.keys(this.state.tasks)
                  .filter(this.filterNotComplete)
                  .map(this.renderTask)}
            </ul>
          </section>
          <section id="todo-form" className="col s5">
            <aside className="card-panel">
              <CreateTaskForm addTask={this.setTask}/>
            </aside>
          </section>
        </section>
      </div>
      <div className="row">
        <section id="todo-display-complete" className="col s12">
          <ul className="collection with-header">
            <li className="collection-header">
              <h4>Completed Tasks</h4></li>
              {Object.keys(this.state.tasks)
                .filter(this.filterComplete)
                .map(this.renderTask)}
          </ul>
        </section>
      </div>
      </div>
    )
  }

});

const CreateTaskForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    let task = {
      name: this.refs.name.value,
      completed: false,
      desc: this.refs.desc.value
    }
    this.props.addTask(task);
    this.refs.taskForm.reset();
  },

  render: function() {
    return (
      <form ref="taskForm" className="task-edit" onSubmit={this.handleSubmit}>
        <h3>Create a new task</h3>
        <div className="row">
          <div className="input-field col s4">
            <label htmlFor="task_name">Task Name</label>
            <input ref="name" type="text" id="task_name" />
          </div>
          <div className="input-field col s8">
            <label htmlFor="task_desc">Task Description</label>
            <input ref="desc" type="text" id="task_desc" />
          </div>
        </div>
        <div className="row">
          <button className="btn waves-effect waves-light col s6" type="submit" name="action">Add Task</button>
        </div>
      </form>
    )
  }
});

ReactDOM.render(<App />, document.querySelector('#container'))
