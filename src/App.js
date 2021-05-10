import './App.css';
import { Component } from 'react';
import { PostCard } from './components/PostCard';
import {loadPosts} from './utils/load-posts'
import { Post } from './components/Post';

class App extends Component {
  state = {
    posts: []
  };


  loadPosts = async () => {
    const postsAndPhotos = await loadPosts();
    this.setState({ posts: postsAndPhotos });
  }

  async componentDidMount() {
    await this.loadPosts()
  }
  render() {
    const { posts } = this.state
    
    return (
      <section className='container'>
        <Post posts={posts}/>
      </section>
    );
  }
}

export default App;
