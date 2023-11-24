import RichText from '../RichText';

interface PostBodyProps {
  post: {
    fields: {
      content: string;
    };
  };
  className?: string;
}

const PostBody: React.FC<PostBodyProps> = ({ post, className }) => {
  const { content } = post.fields;
  return (
    <div className={`details ${className || ''}`}>
      <RichText className="richtext" content={content} />
    </div>
  );
};

export default PostBody;
