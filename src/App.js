import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    name: "Vinicius",
    posts: [
      {
        id: 1,
        title: 'O título 1',
        body: 'O corpo 1'
      },
      {
        id: 2,
        title: 'O título 2',
        body: 'O corpo 2'
      },
      {
        id: 3,
        title: 'O título 3',
        body: 'O corpo 3'
      },
    ]
  };


  handleHClick = () => {
    const name = this.state.name
    if (name === "Vinicius") {
      this.setState({ name: "Dias" })
    }
    if (name === "Dias") {
      this.setState({ name: "Santos" })
    }
    if (name === "Santos") {
      this.setState({ name: "Vinicius" })
    }
  }

  componentDidMount() { 
    const {posts, counter} = this.state;
    posts[0].title = "O título mudou, kek!"

    setTimeout(()=> {
      this.setState({})
    }, 5000)
   }
  render() {

    const { name } = this.state
    const { posts } = this.state
    return (
      <div className="App">
        <h1 onClick={this.handleHClick}>
          {name}
        </h1>
        {posts.map(post => (
          <div key={post.id}>
            <h2 >{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
