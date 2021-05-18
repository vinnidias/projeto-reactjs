import './style.css';
import { Component } from 'react';
import { loadPosts } from '../utils/load-posts'
import { Post } from '../components/Post/index';
import { Button } from '../components/Button';
import { TextInput } from '../components/TextInput';

class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 6,
    searchValue: '',
  };


  loadPosts = async () => {
    const { page, postsPerPage } = this.state;
    const postsAndPhotos = await loadPosts();
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
    });
  }

  loadMorePosts = () => {
    const {
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state
    const nextPage = page + postsPerPage;
    const nextPost = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPost);

    this.setState({ posts, page: nextPage })
  }

  async componentDidMount() {
    await this.loadPosts()
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value })
    console.log(this.searchValue)
  }

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state
    const noMorePosts = page + postsPerPage >= allPosts.length

    const filterPosts = !!searchValue ?
      allPosts.filter(post => {
        return post.title.toLowerCase().includes(searchValue.toLocaleLowerCase());
      })
      :
      posts;

    return (
      <section className='container'>

        <div className="search-container">
          {!!searchValue && (
            <h1>Search Value: {searchValue}</h1>
          )}
          <TextInput searchValue={searchValue} handleChange={this.handleChange} />
        </div>
        {filterPosts.length > 0 && (
          <Post posts={filterPosts} />
        )}

        {filterPosts.length === 0 && (
          <p>Não existem posts</p>
        )}
        <div className="button-container">
          {!searchValue && (
            <Button
              disabled={noMorePosts}
              title={'Carregar mais...'}
              onClick={this.loadMorePosts}
            />
          )}

        </div>
      </section>
    );
  }
}

export default Home;
