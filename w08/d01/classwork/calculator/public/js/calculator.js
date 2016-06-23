const CalculatorView = React.createClass({
  handleSubmit : function (event) {
    event.preventDefault();
    console.log(this.refs.expression.value)
    var numbers = this.refs.expression.value.split(' ')
    var operation = this.refs.status.value
    var parsedNumbers = numbers.map((el) => {
      return parseInt(el)
    })
    var total;

    switch (operation){
      case 'add':
      total = parsedNumbers.reduce((a,b)=>{
        return a+b;
      });
      break;

      case 'subtract':
      total = parsedNumbers.reduce((a,b)=>{
        return a-b;
      });
      break;

      case 'multiply':
      total = parsedNumbers.reduce((a,b)=>{
        return a*b;
      });
      break;
      case 'divide':
      total = parsedNumbers.reduce((a,b)=>{
        return a/b;
      });
      break;
      default:
      total = 'there was an error'
    }
    this.props.renderResult(total)
    this.refs.arithmeticForm.reset()
  },

  render : function (){
    return(
      <div>
        <form ref="arithmeticForm" onSubmit={this.handleSubmit}>
        <div>
          <input type="text" ref="expression" placeholder="what numbers do you want to evaluate?" />
          <select ref="status">
            <option value="add"> add </option>
            <option value="subtract"> subtract </option>
            <option value="multiply"> multiply </option>
            <option value="divide"> divide </option>
          </select>
        </div>
        <button type="submit">Calculate</button>
        </form>
      </div>
    )
  }
})

const AnswerView = React.createClass({
  render : function(){
    var answer = this.props.answer;
    console.log(answer)
    return (
      <div>
      {answer}
      </div>
    )
  }
})

const App = React.createClass({
  getInitialState: function (){
    return {
      results: '87654321'
    }
  },

  //this is the function that will change the state
  //it lives in app because it manipulates app
  //but it is called in calculator view
  renderResult : function (answer){
    this.state.results = answer;
    this.setState({results: this.state.results})
  },

//here renderResult is called again but why? when I take it onSubmit
//it says that this.props.renderResult does not exist
//ok, Calculator view which calculates the total
//does not have access to this function without passing it the way it is passed here
//up thre it is this.props.renderResult(answer)
//where answer is from the cacluations
//at first answer View has nothing to show because it is an empty string.
render: function (){
  return(
    <div>
      <h1> Calculator </h1> <CalculatorView renderResult={this.renderResult} />
      <AnswerView answer={this.state.results}/>
    </div>
  )
}
})


ReactDOM.render(
  <App />, document.getElementById('container')
);
