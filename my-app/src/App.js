import { render } from '@testing-library/react';
import './App.css';
import Main from './components/Main'

const mainPage = () =>{ 
      return(
      <div>
          <Main/>
      </div>
    )
}

function App() {
  return (
    <div className="App">
      <button className = "button" onClick = {mainPage}>
      Main
      </button>
      
      <header className="App-header">
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
    </div>
  );
}

export default App;