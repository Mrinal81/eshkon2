// [slug].tsx
import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import PostBody from '../../components/posts/PostBody';
import PostHeader from '../../components/posts/PostHeader';
import { client, fetchContentfulData } from '../../lib/contentful/client';

interface PostProps {
  post: {
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
      content: string;
    };
  };
}


const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <div>
      <PostHeader post={post} />
      <PostBody post={post} />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await client.getEntries({ content_type: 'post' });

  const paths = response.items.map((item: any) => ({
    params: { slug: item.fields.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await client.getEntries({
    content_type: 'post',
    'fields.slug': params?.slug,
  });

  const post = response.items[0];

  return {
    props: {
      post: {
        fields: {
          title: post.fields.title,
          coverImage: post.fields.coverImage,
          author: post.fields.author,
          date: post.fields.date,
          content: post.fields.content,
        },
      },
    },
  };
};

export default Post;
