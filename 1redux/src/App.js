/*
 * @Author: TerryMin
 * @Date: 2019-06-09 07:04:17
 * @LastEditors: TerryMin
 * @LastEditTime: 2019-08-16 14:36:55
 * @Description: file not
 */
import React from 'react';
import PropTypes from 'prop-types';

const ThemeContext = React.createContext({
  background: 'red',
  color: 'white'
})

export default class App extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value={{ background: 'green', color: 'white' }}>
        <Header></Header>
      </ThemeContext.Provider>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <Title>Hello React Context API</Title>
    )
  }
}

class Title extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {
          context => (
            <h1 style={{ background: context.background, color: context.color }}>
              {this.props.children}
            </h1>
          )
        }
      </ThemeContext.Consumer>
    )
  }
}

// export default class App extends React.Component {
//   static childContextTypes = {
//     propA: PropTypes.string,
//     methodA: PropTypes.func
//   }

//   getChildContext() {
//     return {
//       propA: 'propA12132',
//       methodA: () => 'methodA'
//     }
//   }

//   render() {
//     return <MiddleComponent></MiddleComponent>
//   }
// }

// class MiddleComponent extends React.Component {
//   render() {
//     return <ChildComponent></ChildComponent>
//   }
// }

// class ChildComponent extends React.Component {
//   static contextTypes = {
//     propA: PropTypes.string,
//     methodA: PropTypes.func
//   }
//   render() {
//     const { propA, methodA } = this.context;
//     console.log(`context.propA = ${propA}`)  // context.propA = propA
//     console.log(`context.methodA = ${methodA}`);

//     return <div>
//       中国
//     </div>
//   }
// }
