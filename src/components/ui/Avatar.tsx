// Avatar.tsx
import React from 'react';
import ContentfulImage from './ContentfulImage';

interface AvatarProps {
  name: string;
  picture: string | { fields: { file: { url: string } } };
}

const Avatar: React.FC<AvatarProps> = ({ name, picture }) => {
  // Check if picture is a string, and if so, use it directly as the URL
  const imageUrl = typeof picture === 'string' ? picture : picture.fields.file.url;

  return (
    <div className='author'>
      <div className='relative'>
        <ContentfulImage
          src={imageUrl}
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
