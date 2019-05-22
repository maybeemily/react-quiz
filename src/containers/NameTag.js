import React, { PureComponent } from 'react';
import Shape from '../components/Shape';
import TextSelector from '../components/TextSelector';

export default class NameTag extends PureComponent {
  state = {
    text: '',
    color: 'white',
    backgroundColor: 'red'
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { text } = this.state;

    return (
      <>
      <TextSelector text={text} handleChange={this.handleChange}/>
      <Shape text={text} color={this.state.color} backgroundColor={this.state.backgroundColor}/>
      </>
    );
  }
}
