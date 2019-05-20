import React, { PureComponent } from 'react';

export default class ColorSelector extends PureComponent {
  state = {
    textColor: '#000000',
    backgroundColor: '#0000FF'
  }

  handleSumbit = event => {
    event.preventDefault();
    const { textColor, backgroundColor } = this.state;
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { textColor, backgroundColor } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="textColor" type="color" value={textColor} onChange={this.handleChange}/>
        <input name="backgroundColor" type="color" value={backgroundColor} onChange={this.handleChange}/>
      </form>
    );
  }

}