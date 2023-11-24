import { useState } from 'react';
import AlgoliaSearch from '../../components/AlgoliaSearch';
import { client } from '../../lib/contentful/client';
import PostCard from '../../components/posts/PostCard';

interface Post {
  fields: {
    title: string;
    slug: string;
    excerpt: string;
    coverImage: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    author: {
      fields: {
        name: string;
        picture: {
          fields: {
            file: {
              url: string;
            };
          };
        };
      };
    };
    date: string;
  };
}



interface PostsProps {
  posts: Post[];
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Post[]>(posts);

  const handleSearchResults = (results: Post[]) => {
    setSearchResults(results);
  };

  return (
    <section className='section'>
      <div className='container'>
      <AlgoliaSearch data-onSearchResults={handleSearchResults} />
        <ul className='unorderedlist'>
          {searchResults.map((post) => (
            <PostCard key={post.fields.slug} post={post} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export const getStaticProps = async () => {
  const response = await client.getEntries({ content_type: 'post' });

  return {
    props: {
      posts: response.items as Post[],
      revalidate: 60,
    },
  };
};

export default Posts;
