

const CalculatorForm = React.createClass({


  render : function () {
    return (
      <div>
        <form ref="CalculatorForm" onSubmit={this.handleSubmit}>
          <input type="text" ref="numbers" placeholder="enter some numbers" />
            <select>
              <option ref="add" value="add">Add </option>
              <option ref="subtract" value="subtract"> Subtract </option>
              <option ref="mutliply" value="add"> Multiply </option>
              <option ref="divide" value="add"> Divide </option>
            </select>
            <button type="submit"> Button </button>
        </form>
      </div>
    )
  }
})

const App = React.createClass({

  getInitialState: function (){
    return {
      calculate: ''
    }
  },

render: function (){
  return(
    <div>
      <h1> Calculator </h1>
      <CalculatorForm />
    </div>
  )
}

})
//
//
//
//
ReactDOM.render(
  <App />, document.getElementById('container')
)
