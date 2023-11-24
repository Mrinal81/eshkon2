import Avatar from '../ui/Avatar'
import ContentfulImage from '../ui/ContentfulImage'
import DateComponent from '../ui/DateComponent'

const PostHeader = ({ post }) => {
  const { title, coverImage, author, date } = post.fields

  return (
    <div className='breif'>
        <div className="breif-content">
      <h2>{title}</h2>
      <div className='hidden'>
        <Avatar name={author.fields.name} picture={author.fields.picture} />
        <DateComponent dateString={date} className='date' />
      </div>
      <div className='posthead-content'>
        <ContentfulImage
          alt={`Cover Image for ${title}`}
          src={coverImage.fields.file.url}
          width="500"
          height="300"
          className="breif-img"
        />
      </div>
    </div>
    </div>
  )
}

export default PostHeader