const CalculatorView = React.createClass({
handleSubmit : function(e) {
event.preventDefault();
var numbers = this.refs.expression.value.split(' ')
var operation = this.refs.status.value
var parsedNumbers = numbers.map((el) => {
return parseInt(el)
})
var total;

switch(operation) {
case "add":
total = parsedNumbers.reduce((a, b) => {
return a + b;
});
break;
case "subtract":
total = parsedNumbers.reduce((a, b) => {
return a - b;
});
break;
case "multiply":
total = parsedNumbers.reduce((a, b) => {
return a * b;
});
break;
case "divide":
total = parsedNumbers.reduce((a, b) => {
return a / b;
});
break;
default:
total = "whoops! Try Again?"
}

this.props.renderResult(total)
this.refs.arthimeticForm.reset()
},

render : function() {
return (
<div>
<form ref="arthimeticForm" onSubmit={this.handleSubmit}>
<div>
<input type="text" ref="expression" placeholder="what numbers do you want to evaluate?" />
<select ref="status">
<option value="add">add</option>
<option value="subtract"> subtract</option>
<option value="multiply">multiply</option>
<option value="divide">divide</option>
</select>
</div>
<button type="submit">Calculate!</button>
</form>
</div>
)
}
})

const AnswerView = React.createClass({
render : function() {
var answer = this.props.answer;
return (
<div>
{answer}
</div>
)
}
})

const App = React.createClass({
getInitialState : function() {
return {
results : ''
}
},

renderResult : function(answer) {
this.state.results = answer;
this.setState({ results: this.state.results })
},

render : function() {
return (
<div>
<CalculatorView renderResult={this.renderResult}/>
<AnswerView answer={this.state.results}/>
</div>
)
}
})

ReactDOM.render(
<App />, document.getElementById('container')
);
