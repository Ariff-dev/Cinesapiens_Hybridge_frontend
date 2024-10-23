const SapiensPost = () => {
  return (
    <div className='mx-4 mt-8'>
      <form action='' className='flex flex-col gap-4 justify-center'>
        <div className='flex gap-2'>
          <p>Título</p>
          <input type='text' name='title' value='title' />
        </div>
        <div>
          <p>Descripción</p>
          <textarea
            name='description'
            id='description'
            className='w-1/2'
          ></textarea>
        </div>
        <div>
          <p>Portada</p>
          <input type='file' name='portada' id='portada' />
        </div>
        <button
          className='bg-primary-text-color text-black font-bold py-2 px-4 rounded-lg w-1/2'
          type='submit'
        >
          Crear publicación
        </button>
      </form>
    </div>
  )
}

export default SapiensPost
