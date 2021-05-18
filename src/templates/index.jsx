import './style.css';
import { useCallback, useEffect, useState } from 'react';
import { loadPosts } from '../utils/load-posts'
import { Post } from '../components/Post/index';
import { Button } from '../components/Button';
import { TextInput } from '../components/TextInput';


export const Home = () => {
  const [posts, setPosts] = useState([])
  const [allPosts, setAllPPosts] = useState([])
  const [postsPerPage, setPostsPerPage] = useState(6)
  const [searchValue, setSearchValue] = useState('')
  const [page, setPage] = useState(0)

  const noMorePosts = page + postsPerPage >= allPosts.length

  const filterPosts = !!searchValue ?
    allPosts.filter(post => {
      return post.title.toLowerCase().includes(searchValue.toLocaleLowerCase());
    })
    :
    posts;

    

  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    const postsAndPhotos = await loadPosts();

    setPosts(postsAndPhotos.slice(page, postsPerPage));
    setAllPPosts(postsAndPhotos)
  }, [])

  useEffect(()=>{
    handleLoadPosts(0, postsPerPage);
  }, [handleLoadPosts, postsPerPage])

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPost = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPost);

    setPosts(posts)
    setPage(nextPage)
  }

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value)
    
  }


  return (
    <section className='container'>

      <div className="search-container">
        {!!searchValue && (
          <h1>Search Value: {searchValue}</h1>
        )}
        <TextInput searchValue={searchValue} handleChange={handleChange} />
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
            onClick={loadMorePosts}
          />
        )}

      </div>
    </section>
  )
}


export default Home;
