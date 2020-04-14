import React from 'react';
import * as ReactDOM from 'react-dom';
import './Edite.css';

export default class Demo extends React.PureComponent {
  componentDidMount() {
    console.log(this);
    const $this = ReactDOM.findDOMNode(this)
    $this.addEventListener('click', this.onDOMClick, false)
  }

  onDOMClick = evt => {
    console.log(evt);
    // evt.stopPropagation();
    console.log('dom event')
  }

  onClick = evt => {
    console.log(evt);
    // evt.stopPropagation();
    console.log('react event')
  }

  render() {
    return (
      <div onClick={this.onClick}>Demo</div>
    )
  }
}
