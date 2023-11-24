import { useState } from 'react';
import AlgoliaSearch from '../../components/AlgoliaSearch';
import { client } from '../../lib/contentful/client';
import PostCard from '../../components/posts/PostCard';

namespace PostsNS {
  export interface Post {
    fields: {
      title: string;
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
      slug: string;
      excerpt: string
      
    ;
    };
  }

  export interface PostsProps {
    posts: Post[];
  }
}

const Posts: React.FC<PostsNS.PostsProps> = ({ posts }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<PostsNS.Post[]>(posts);

  const handleSearchResults = (results: PostsNS.Post[]) => {
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
      posts: response.items as PostsNS.Post[],
      revalidate: 60,
    },
  };
};


export default Posts;
