import React, { PureComponent } from 'react';
import Shape from '../components/Shape';
import TextSelector from '../components/TextSelector';
import ColorSelector from '../components/ColorSelector';

export default class NameTag extends PureComponent {
  state = {
    text: '',
    color: '#000000',
    backgroundColor: '#0000FF'
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { text, color, backgroundColor } = this.state;

    return (
      <>
      <TextSelector text={text} handleChange={this.handleChange}/>
      <ColorSelector color={color} backgroundColor={backgroundColor} handleChange={this.handleChange}/>
      <Shape text={text} color={color} backgroundColor={backgroundColor}/>
      </>
    );
  }
}
