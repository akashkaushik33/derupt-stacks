import {BrowserRouter as Router} from 'react-router-dom';
import {lastIndexOf, substr} from '@7urtle/lambda';
import Routes from './Routes';
import logo from './logo.svg';
import './App.css';

/**
 * Turns URL path into router basename by removing everything after the last slash
 * 
 * @HindleyMilner getBasename :: string -> string
 *
 * @pure
 * @param {string} path URL path, probably window.location.pathname
 * @returns {string} final basename
 * 
 * @example
 * getBaseName('/some/structure/page'); // => '/some/structure'
 */
 const getBasename = path => substr(lastIndexOf('/')(path))(0)(path);

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <article>
        <Router basename={getBasename(window.location.pathname)}>
          <Routes />
        </Router>
      </article>

    </div>
  );
}

export default App;
