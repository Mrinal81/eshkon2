import Link from 'next/link';
import Avatar from '../ui/Avatar';
import DateComponent from '../ui/DateComponent';
import ContentfulImage from '../ui/ContentfulImage';

interface PostCardProps {
  post: {
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
  };
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const { title, slug, excerpt, coverImage, author, date } = post.fields;

  return (
    <div className="post-container">
      <li className="post-card">
        <Link href={`/posts/${slug}`} aria-label={title} className='arial' style={{
          textDecoration: "none",
          listStyle: "none"
        }}>
          <div className="contentful-img">
            <ContentfulImage src={coverImage.fields.file.url} alt={`Cover Image for ${title}`}
              width="200"
              height="200"
              className="contentfulimg"
            />
          </div>
          <div className="post-date">
            <h3 className='title'>{title}</h3>
            <DateComponent dateString={date} className="date" />
            <p className='text-base'>{excerpt}</p>
            <Avatar name={author.fields.name} picture={author.fields.picture} />
          </div>
        </Link>
      </li>
    </div>
  );
};

export default PostCard;
