import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Bar extends React.Component {

  componentDidMount() {
    console.log("componentDidMount")
  }

  render() {
    const { idx } = this.props;
    return (
      <div>in Bar : {idx}</div>
    )
  }
}

export class AppRouter extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = { idx: 1 }
  }

  handleClick = () => {
    this.setState(state => ({ idx: state.idx + 1 }))
  };

  render() {
    return (
      <div>
        <div>
          {this.state.idx}
          <button onClick={this.handleClick}>add</button>
        </div>
        <div>
          <Router>
            <Route render={() => (<Bar idx={this.state.idx} />)} />
          </Router>
        </div>
      </div>
    );
  }
}
