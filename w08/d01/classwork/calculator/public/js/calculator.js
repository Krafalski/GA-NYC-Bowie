// const CalculatorView = React.createClass({
//   handleSubmit : function (event){
//     event.preventDefault();
//     console.log(this);
//   }
// }),
//  render : function (){
//    return (
//      <div>
//      </div>
//    )
//  }
//   handleSubmit :function (event){
//     event.preventDefault();
//     var numbers = this.refs.numbers.vaule.split(' ')
//     var operation = this.refs.operator.value
// //     var parsedNumbers = numbers.map((el)=>{
// //   return parseInt(el)
// // })
//   console.log(operation)
//   var total;
// })

const CalculatorForm = React.createClass({
  render : function () {
    return (
      <div>
        <form ref="CalculatorForm" onSubmit={this.handleSubmit}>
          <input type="text" ref="numbers" placeholder="enter some numbers" />
            <select ref="operator">
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


ReactDOM.render(
  <App />, document.getElementById('container')
)
