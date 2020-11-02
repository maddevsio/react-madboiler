import React from 'react'

// assets
import logo from '../assets/images/md.svg'

export default function Main() {
  return (
    <div className="main">
      <img src={logo} alt="MAD DEVS" className="main__logo"/>
      <h2 className="main__title">React-madboiler</h2>
      <p className="main__description">
        Simple boilerplate for <code className="react">React</code> from <code className="main__md">Mad Devs</code>
      </p>
      <div className="main__grid">
        <div className="main__grid-item">
          <h4 className="main__subtitle">Dependencies</h4>
          <ul className="main__list">
            <li className="main__list-item">
              <a target="_blank" rel="noopener noreferrer" href="https://ru.reactjs.org/">React 17.0.1</a>
            </li>
            <li className="main__list-item">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/facebook/prop-types/">Prop-types</a>
            </li>
            <li className="main__list-item">
              <a target="_blank" rel="noopener noreferrer" href="https://redux.js.org/">Redux</a>
            </li>
            <li className="main__list-item">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/axios/axios">Axios</a>
            </li>
          </ul>
        </div>
        <div className="main__grid-item">
          <h4 className="main__subtitle">Recommendations</h4>
          <ul className="main__list">
            <li className="main__list-item">
              <a target="_blank" rel="noopener noreferrer" href="https://www.typescriptlang.org/">Typescript</a>
            </li>
            <li className="main__list-item">
              <a target="_blank" rel="noopener noreferrer" href="https://redux-saga.js.org/">Redux saga - side effects for redux base on Generators*</a>
            </li>
            <li className="main__list-item">
              <a target="_blank" rel="noopener noreferrer" href="https://redux-observable.js.org/">Redux-observable - side effects for redux based on RXJS</a>
            </li>
            <li className="main__list-item">
              <a target="_blank" rel="noopener noreferrer" href="https://styled-components.com/">Styled-components - best CSS-in-JS library</a>
            </li>
            <li className="main__list-item">
              <a target="_blank" rel="noopener noreferrer" href="https://ru.reactjs.org/docs/hooks-intro.html">Hooks - React without classes</a>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/streamich/react-use">(React-use)</a>
            </li>
            <li className="main__list-item">
              <a target="_blank" rel="noopener noreferrer" href="https://jsdoc.app/">JSDoc - documenting your code</a>
            </li>
            <li className="main__list-item">
              <a target="_blank" rel="noopener noreferrer" href="https://jsdoc.app/">Formik - simple form usage in react</a>
            </li>
          </ul>
        </div>
        <div className="main__grid-item">
          <h4 className="main__subtitle">Examples</h4>
        </div>
        <div className="main__grid-item">
          <h4 className="main__subtitle">Useful links</h4>
        </div>
      </div>
{/*       
      <ul className="main__list">
        <li className="main__list-item">TODO app</li>
      </ul> */}
      
    </div>
  )
}
