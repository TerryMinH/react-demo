import React from 'react';
import * as ReactDOM from 'react-dom';
import './Edite.less';

export default class Demo extends React.PureComponent {
  componentDidMount() {

    // const $this = ReactDOM.findDOMNode(this)
    // $this.addEventListener('click', this.onDOMClick, false)
  }

  onDOMClick = evt => {
    console.log(evt);
    // evt.stopPropagation();
    console.log('dom event')
  }

  onClick = evt => {
    console.log(evt);
    this.asyncPrint('hello world', 50000);
    console.log(55);
  }

  timeout = (ms) => {
    return new Promise((resolve) => {
      console.log(ms);
      setTimeout(resolve, ms);
    });
  }

  asyncPrint = async (value, ms) => {
    await this.timeout(ms);
  }

  render() {
    return (
      <div>
        <div>项目配置</div>
        <div onClick={this.onClick}>Demo</div>
      </div>
    )
  }
}
