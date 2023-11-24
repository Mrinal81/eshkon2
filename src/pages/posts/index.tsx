// src/pages/posts/index.tsx

import { useState } from 'react';
import AlgoliaSearch from '../../components/AlgoliaSearch';
import { client } from '../../lib/contentful/client';
import PostCard from '../../components/posts/PostCard';

const Posts = ({ posts }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(posts);

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  

  return (
    <section className='section'>
      <div className='container'>
        <AlgoliaSearch  onSearchResults={handleSearchResults}/>
        <ul className='unorderedlist'>
          {searchResults.map((post) => (
            <PostCard key={post.fields.slug} post={post} />
          ))}
          {/* <AlgoliaSearch  onSearchResults={handleSearchResults}/> */}
        </ul>
      </div>
    </section>
  );
};

export const getStaticProps = async () => {
  const response = await client.getEntries({ content_type: 'post' });

  return {
    props: {
      posts: response.items,
      revalidate: 60,
    },
  };
};

export default Posts;
