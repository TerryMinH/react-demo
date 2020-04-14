import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import PropTypes from 'prop-types';

class Main extends Component {
  render() {
    return (
      <div>
        <h2>This is Main</h2>
        <Content />
      </div>
    )
  }
}
class Content extends Component {
  render() {
    return (
      <div>
        <div>小书 content内容!</div>
      </div>
    )
  }
}

class Header extends Component {
  render() {
    return (
      <div>
        <h2>This is Header</h2>
        <Title />
      </div>
    )
  }
}
class Title extends Component {
  static contextTypes = {
    themeColor: PropTypes.string
  }
  constructor(props) {
    super(props)
    console.log(this.props)
  }

  render() {
    return (
      <div style={{ color: this.context.themeColor }}>
        React.js小书标题!
      </div>
    )
  }
}

export default class App extends React.Component {
  static childContextTypes = {
    themeColor: PropTypes.string
  }

  constructor(prop) {
    super(prop);
    this.state = { themeColor: 'green' }
  }

  getChildContext () {
    return { themeColor: this.state.themeColor }
  }

  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

