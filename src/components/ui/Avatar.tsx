import ContentfulImage from './ContentfulImage';

interface AvatarProps {
  name: string;
  picture: {
    fields: {
      file: {
        url: string;
      };
    };
    // Add other fields as needed
  };
}

const Avatar: React.FC<AvatarProps> = ({ name, picture }) => {
  return (
    <div className='author'>
      <div className='relative'>
        <ContentfulImage
          src={picture.fields.file.url}
          width="55"
          height="50"
          className='rounded-full'
          alt={name}
        />
      </div>
      <div className='font-semibold'>{name}</div>
    </div>
  );
};

export default Avatar;
