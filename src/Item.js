import React, { Component } from 'react';

class Item extends Component {

  onCompleteHandle(event) {
    event.target.parentNode.classList.add('done');
  }

  render() {
    console.log(this);
    return (
      <li>
        {this.props.title}
        <button onClick={this.props.delete}>Delete</button>
        <button onClick={this.props.edit}>Edit</button>
        <button onClick={this.onCompleteHandle.bind(this)}>Complete</button>
      </li>
    );
  }
}

export default Item;
