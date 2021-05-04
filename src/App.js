import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Vinicius"
    };
  }

  handleHClick = () => {
    const name = this.state.name
    if(name === "Vinicius"){
      this.setState({ name: "Dias" })
    }
    if(name === "Dias"){
      this.setState({ name: "Santos" })
    }
    if(name === "Santos"){
      this.setState({ name: "Vinicius" })
    }
  }

  render() {

    const { name } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 onClick={this.handleHClick}>
            {name}
          </h1>
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
}

export default App;
