import React, { Component } from 'react';
import './HelloWorld.css';

class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = { greeting: 'Hello' };
  }
  render() {
    return (
      <div className="HelloWorld">
        {this.state.greeting} {this.props.name}!
      </div>
    );
  }
}

export default HelloWorld;
