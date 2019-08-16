import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export class AppRouter extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <h2>Accounts</h2>
          <ul>
            <li><Link to="/netflix">netflix</Link></li>
            <li><Link to="/zillow-group">Zillow Group</Link></li>
            <li><Link to="/order/asc">/order/asc</Link> </li>
            <li> <Link to="/modus-create">Modus Create</Link></li>
          </ul>

          <Route path="/:id" component={Child}></Route>
          <Route path="/order/:direction(asc| desc)" component={ComponentWithRegex}></Route>
        </div>
      </Router>
    )
  }
}

class Child extends React.Component {
  constructor(props) {
    super(props)
    console.log(props);
  }
  render() {
    return (
      <div> <h3>ID:{this.props.match.params.id}</h3></div>
    )
  }
}

class ComponentWithRegex extends React.Component {
  constructor(props) {
    super(props)
    console.log(props);
  }
  render() {
    return (
      < div > <h3>Only asc/desc are allowed: {this.props.match.params.direction}</h3></div >
    )
  }
}