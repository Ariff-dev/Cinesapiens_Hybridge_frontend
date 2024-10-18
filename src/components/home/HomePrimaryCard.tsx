interface Movie {
  ImageURL: string
  title: string
  description: string
}

interface MovieDesc {
  movie: Movie
  index: number
}

export default function HomePrimaryCard({ movie, index }: MovieDesc) {
  return (
    <div key={index} className='flex flex-col items-center w-full'>
      <img
        src={movie.ImageURL}
        alt={movie.title}
        className='w-full h-72 object-cover rounded-lg'
      />
      <p className='text-center mt-2 font-semibold'>{movie.title}</p>
      <p className='text-center text-sm'>{movie.description}</p>
    </div>
  )
}
