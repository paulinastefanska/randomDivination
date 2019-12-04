class Draw extends React.Component {
  state = {
    options: ["a", "b", "c"],
    option: null,
    value: ""
  };

  handleShowOption = () => {
    const index = Math.floor(Math.random() * this.state.options.length);
    this.setState({
      option: this.state.options[index]
    });
  };

  handleInputChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleAddOption = () => {
    if (this.state.value === "") return alert("type something!");
    const options = this.state.options.concat(this.state.value);
    this.setState({
      options,
      value: ""
    });
    alert(`Divination added. Current divinations: ${options}`);
  };

  render() {
    return (
      <div>
        <button onClick={this.handleShowOption}>Check the divination</button>
        <br />
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleAddOption}>Add divination</button>
        {this.state.option ? <h1>{this.state.option}</h1> : null}
      </div>
    );
  }
}

ReactDOM.render(<Draw />, document.getElementById("root"));
