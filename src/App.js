import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <p>
    Hello All this is eswar
    </p>
      <header className="App-header">
      <p>Welcome to Demo </p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         This is the sample project 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         Running on EC2 Instance
        </a>
      </header>
    </div>
  );
}

export default App;
