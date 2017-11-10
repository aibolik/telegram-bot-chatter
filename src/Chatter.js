import React, { Component } from 'react';
import { sendMessage } from './requests';
import './Chatter.css';

class Chatter extends Component {

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      let text = event.target.value;
      sendMessage(text, -310529206);
      this.refs.text.value = '';
    }
  }

  render() {
    return <div className='Chatter'>
      <input ref='text' className='Chatter__input'
      type='text' onKeyPress={this.handleKeyPress} />
    </div>
  }
}

export default Chatter;
