import logo from './logo.svg'; /*декларативный*/
import './App.css'; /*декларативный*/

function App() { // императивный
	const currentYear = new Date().getFullYear(); // декларативный
  return (
    <div className="App"> {/*декларативный*/}
      <header className="App-header"> {/*декларативный*/}
        <img src={logo} className="App-logo" alt="logo" /> {/*декларативный*/}
        <p> {/*декларативный*/}
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a /*декларативный*/
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
		<div>{currentYear}</div> {/*декларативный*/}
      </header>
    </div>
  );
}

export default App; /*декларативный*/
