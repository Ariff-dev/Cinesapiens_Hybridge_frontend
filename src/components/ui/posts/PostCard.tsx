import React from 'react'

interface PostCardProps {
  post: {
    id_post_sa: number
    post_name: string
    post_description: string
    image_url: string
  }
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg m-4'>
      <img
        className='w-full h-72 object-cover'
        src={post.image_url}
        alt={post.post_name}
      />
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{post.post_name}</div>
        <p className='text-gray-700 text-base line-clamp-3'>
          {' '}
          {/* Clases para truncar */}
          {post.post_description}
        </p>
      </div>
    </div>
  )
}

export default PostCard
