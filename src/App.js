import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    name: "Vinicius",
    imagePath: "https://user-images.githubusercontent.com/60718041/117223356-d94fd000-ade3-11eb-9aea-a3f5009c30cd.png",
    link: "https://github.com/vinnidias",
    posts: []
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
        link: 'https://www.linkedin.com/in/vinicius-dias-santos-4901341a2/',
        imagePath: "https://user-images.githubusercontent.com/60718041/117223216-92fa7100-ade3-11eb-9f04-a001c830cc0d.png"
      })
    }, 5000)
  }

  loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');

    const [posts] = await Promise.all([postsResponse]);

    const postsJson = await posts.json();

    this.setState({ posts: postsJson });
  }

  componentDidMount() {
    this.loadPosts()
  }
  render() {

    const { name } = this.state
    const { posts } = this.state
    const { imagePath } = this.state
    const { link } = this.state
    return (
      <section className='container'>
        <div className="posts">
          <h1 onClick={this.handleHClick}>
            {name}
          </h1>
          {posts.map(post => (
            <div key={post.id} className='post-content'>
              <h2 >{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default App;
