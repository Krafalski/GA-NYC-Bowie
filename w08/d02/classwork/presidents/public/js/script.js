'use strict'

const App = React.createClass({
  getInitialState:function(){
    return{tasks:{}}
  },
  componentDidMount:function() {

   // this is where you'll get the data from the 'db'
 },
  addTask : function (newTask){
    console.log ('i am inside addTask', newTask)
    var timestamp = (new Date()).getTime();
    this.state.tasks['task-'+ timestamp] = newTask;

    this.setState({tasks : this.state.tasks })
  },

  completeTask function(key){
    this.state.tasks[key].completed = true;
    this.setState({tasks: this.state.tasks});
  },
  fitlerNotComplete: function(key){
    return this.state.tasks[key]completed===false
  },
  fitlerComplete: function(key){
    return this.state.tasks[key]completed===true
  },

  renderTask:function(key){
    console.log('key is ', key)
    return(
      <Task key={key} index={key} details={this.state.tasks[key]} completeTask={this.completeTask} />
    )
  },

  // completeTask : function () {
  //
  //   console.log();
  //   return()
  // }

 render : function() {
   return(

           <div className="container">
            {/* to do unfinished tasks*/}
             <div className="row">
               <section className="col s12">
                 <section id="todo-display" className="col s7">
                   <ul className="collection with-header">
                     <li className="collection-header"><h4>Tasks</h4></li>
                          {/* to do unfinished tasks*/}
                          {Object.keys(this.state.tasks)
                            .filter(function(key){
                              return this.state.tasks[key]===false
                            })
                            .map(this.renderTask)}
                   </ul>
                 </section>
                  {/* to do FORM*/}
                 <section id="todo-form" className="col s5">
                   <aside className="card-panel">
                    <CreateTaskForm addTask={this.addTask}/>
                   </aside>
                 </section>
               </section>
             </div>
             <div className="row">
               <section id="todo-display-complete" className="col s12">
                 <ul className="collection with-header">
                     <li className="collection-header"><h4>Completed Tasks</h4></li>
                        {/* complete tasks */}
                   </ul>

                 </section>
             </div>
           </div>
   )
 }

});


// const CreateTaskForm = React.createClass({
//
// });
//
//
const Task = React.createClass({
  handleClick:function(event){
    event.preventDefault();
    this.props.completeTask
  }

  render: function () {
    return(<li className="collection-item"><div><strong> {this.props.details.name}</strong> {this.props.details.desc}
    <a href="#" className="secondary-content">
    <i className="material-icons" ref="check" onSubmit={this.handleSubmit}>check</i>
    </a></div></li>)
  }

});
//
// const ShowTasks = React.createClass({
//
// });

const CreateTaskForm = React.createClass({
  handleSubmit  : function (event){
    event.preventDefault();
    var task ={
      name : this.refs.name.value,
      completed : false,
      desc : this.refs.desc.value
    }
    this.props.addTask(task);
    this.refs.form.reset();

  },
  render: function(){
    return(
      <form className="task-edit" onSubmit={this.handleSubmit} ref="form">
        <h3>Create a new task</h3>

        <div className="row">
          <div className="input-field col s4">
            <label htmlFor="task_name">Task Name</label>
            <input type="text"  id="task_name" ref="name" />
          </div>
          <div className="input-field col s8">
            <label htmlFor="task_desc">Task Description</label>
            <input type="text"  id="task_desc" ref="desc"/>
          </div>
        </div>
        <div className="row">
          <button className="btn waves-effect waves-light col s6" type="submit" name="action">Add Task</button>
        </div>


      </form>

    )
  }
})






ReactDOM.render(<App />, document.querySelector('#container'))
