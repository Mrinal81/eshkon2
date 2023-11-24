import ContentfulImage from './ContentfulImage'

const Avatar = ({ name, picture }) => {
  return (
    <div className='author'>
      <div className='relative'>
        <ContentfulImage
          src={picture.fields.file.url}
        //   layout='fill'
        width="55" height="50"
          className='rounded-full'
          alt={name}
        />
      </div>
      <div className='font-semibold'>{name}</div>
    </div>
  )
}

export default Avatar