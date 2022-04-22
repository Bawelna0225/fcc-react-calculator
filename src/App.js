const isOperator = /[-+*/]/;

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentInput: "0",
      history: ""
    };

    this.handleOperator = this.handleOperator.bind(this);
    this.handleNumber = this.handleNumber.bind(this);
    this.handleDot = this.handleDot.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleCalculate = this.handleCalculate.bind(this);
  }
  handleOperator(event) {
    let currentOperator = event.target.value;
    let retHistory = this.state.history;

    if (retHistory === "") {
      retHistory = "0";
    } else if (
      retHistory[retHistory.length - 1] === "." ||
      isOperator.test(this.state.currentInput)
    ) {
      retHistory = retHistory.slice(0, retHistory.length - 1);
    }

    this.setState({
      currentInput: currentOperator,
      history: retHistory + currentOperator
    });
  }

  handleDelete() {
    const currentInput = this.state.currentInput;
    if (currentInput !== '0' && currentInput.length > 1) {
      this.setState({
        currentInput: currentInput.substring(0, currentInput.length - 1)
      });
    } else if (currentInput.length === 1) {
      this.setState({
        currentInput: ''
      });
    }
  }

  handleNumber(event) {
    const currentInput = this.state.currentInput;
    const currentDigit = event.target.value;

    if (isOperator.test(currentInput)) {
      this.setState({
        currentInput: currentDigit,
        history: this.state.history + currentDigit
      });
    } else if (currentInput == "0") {
      if (currentDigit != "0") {
        this.setState({
          currentInput: currentDigit,
          history: this.state.history + currentDigit
        });
      }
    } else {
      this.setState({
        currentInput: currentInput + currentDigit,
        history: this.state.history + currentDigit
      });
    }
  }
  handleDot() {
    const currentInput = this.state.currentInput;
    if (!isOperator.test(currentInput) && !currentInput.includes(".")) {
      this.setState({
        currentInput: currentInput + ".",
        history: this.state.history + (this.state.history == "" ? "0." : ".")
      });
    }
  }
  handleClear() {
    this.setState({
      currentInput: "0",
      history: ""
    });
  }
  handleCalculate() {
    let formula = this.state.history;
    if (isOperator.test(formula[formula.length - 1])) {
      formula = formula.slice(0, formula.length - 1);
    }
    let result = eval(formula);
    this.setState({
      currentInput: result,
      history: result
    });
  }
  render() {
    return (
      <div className="calc-grid">
        <div className="display-screen">
          <div id="history">{this.state.history}</div>
          <div id="display">
            {this.state.currentInput}
          </div>
        </div>
      <button className='span-two' id="clear" onClick={this.handleClear}>
        AC
      </button>
      <button id='delete' onClick={() => this.handleDelete()}>DEL</button>
      <button id="divide" value="/" onClick={this.handleOperator}>
        /
      </button>
      <button id="one" value="1" onClick={this.handleNumber}>
        1
      </button>
      <button id="two" value="2" onClick={this.handleNumber}>
        2
      </button>
      <button id="three" value="3" onClick={this.handleNumber}>
        3
      </button>
      <button id="multiply" value="*" onClick={this.handleOperator}>
        *
      </button>
      <button id="four" value="4" onClick={this.handleNumber}>
        4
      </button>
      <button id="five" value="5" onClick={this.handleNumber}>
        5
      </button>
      <button id="six" value="6" onClick={this.handleNumber}>
        6
      </button>
      <button id="add" value="+" onClick={this.handleOperator}>
        +
      </button>
      <button id="seven" value="7" onClick={this.handleNumber}>
        7
      </button>
      <button id="eight" value="8" onClick={this.handleNumber}>
        8
      </button>
      <button id="nine" value="9" onClick={this.handleNumber}>
        9
      </button>
      <button id="subtract" value="-" onClick={this.handleOperator}>
        -
      </button>
      <button id="decimal" onClick={this.handleDot}>
        .
      </button>
      <button id="zero" value="0" onClick={this.handleNumber}>
        0
      </button>
      <button className='span-two' id="equals" onClick={this.handleCalculate}>
        =
      </button>
      </div>
    );
  }
}
ReactDOM.render(<Calculator />, document.getElementById("app"));