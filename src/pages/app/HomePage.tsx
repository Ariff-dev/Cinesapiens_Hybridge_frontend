import React, { useState } from 'react'

const dataPrueba = [
  {
    title: 'Inception',
    description:
      'Un ladrón que roba secretos del subconsciente es dado la tarea de implantar una idea en la mente de un CEO.',
    ImageURL:
      'https://m.media-amazon.com/images/I/71SBgi0X2KL._AC_UF894,1000_QL80_.jpg',
  },
  {
    title: 'The Godfather',
    description:
      'La historia de la familia mafiosa Corleone y su patriarca, Vito Corleone.',
    ImageURL:
      'https://m.media-amazon.com/images/M/MV5BYTJkNGQyZDgtZDQ0NC00MDM0LWEzZWQtYzUzZDEwMDljZWNjXkEyXkFqcGc@._V1_.jpg',
  },
  {
    title: 'The Dark Knight',
    description:
      'Batman enfrenta al Joker, un criminal que siembra el caos en Gotham.',
    ImageURL:
      'https://m.media-amazon.com/images/S/pv-target-images/e9a43e647b2ca70e75a3c0af046c4dfdcd712380889779cbdc2c57d94ab63902.jpg',
  },
  {
    title: 'Pulp Fiction',
    description: 'Un entrelazado de historias de criminales en Los Ángeles.',
    ImageURL:
      'https://m.media-amazon.com/images/M/MV5BYTViYTE3ZGQtNDBlMC00ZTAyLTkyODMtZGRiZDg0MjA2YThkXkEyXkFqcGc@._V1_.jpg',
  },
]

export const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsToShow = 2 // Número de elementos a mostrar a la vez

  const handleNext = () => {
    if (currentIndex < dataPrueba.length - itemsToShow) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  return (
    <main className='mx-2'>
      <div className='mt-12 flex flex-col gap-8'>
        <div className='flex items-end justify-between'>
          <h3 className='text-4xl flex flex-col'>
            <span className='font-bold'>Nuevos posts </span>de la temporada
          </h3>
          <div className='flex gap-4'>
            <button
              className='bg-secondary-color-component text-xl p-2 px-4 rounded-lg'
              onClick={handlePrev}
              disabled={currentIndex === 0}
            >
              <span>{'<'}</span>
            </button>
            <button
              className='bg-secondary-color-component text-xl p-2 px-4 rounded-lg'
              onClick={handleNext}
              disabled={currentIndex >= dataPrueba.length - itemsToShow}
            >
              <span>{'>'}</span>
            </button>
          </div>
        </div>
        <div className=''>
          <div className='flex flex-nowrap items-center absolute gap-10 mx-8'>
            {dataPrueba
              .slice(currentIndex, currentIndex + itemsToShow)
              .map((movie, index) => (
                <div key={index} className='flex flex-col items-center w-48'>
                  <img
                    src={movie.ImageURL}
                    alt={movie.title}
                    className='w-full h-72 object-cover rounded-lg'
                  />
                  <p className='text-center mt-2 font-semibold'>
                    {movie.title}
                  </p>
                  <p className='text-center text-sm'>{movie.description}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </main>
  )
}
