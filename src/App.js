import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    name: "Vinicius",
    imagePath: "https://user-images.githubusercontent.com/60718041/117223356-d94fd000-ade3-11eb-9aea-a3f5009c30cd.png",
    link: "https://github.com/vinnidias",
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

  handleTimout = () => {
    const { posts, counter } = this.state;
    posts[0].title = "O título mudou, kek!"

    setTimeout(() => {
      this.setState({ 
          link: 'https://www.linkedin.com/in/vinicius-dias-santos-4901341a2/' ,
          imagePath: "https://user-images.githubusercontent.com/60718041/117223216-92fa7100-ade3-11eb-9f04-a001c830cc0d.png" })
    }, 5000)
  }

  componentDidMount() {
    this.handleTimout()
  }
  render() {

    const { name } = this.state
    const { posts } = this.state
    const { imagePath } = this.state
    const { link } = this.state
    return (
      <div className="App">
        <h1 onClick={this.handleHClick}>
          {name}
        </h1>
        <a target="blank" href={link}>
          <img src={imagePath}></img>
        </a>
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
