import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const SapiensPost = () => {
  const location = useLocation()
  const post = location.state?.post
  const [title, setTitle] = useState(post ? post.post_name : '')
  const [description, setDescription] = useState(
    post ? post.post_description : ''
  )
  const [image, setImage] = useState(null)
  const [message, setMessage] = useState('')
  const navigate = useNavigate()
  const isEditMode = Boolean(post)

  useEffect(() => {
    if (post) {
      setTitle(post.post_name)
      setDescription(post.post_description)
    }
  }, [post])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('post_name', title)
    formData.append('post_description', description)
    if (image) {
      formData.append('image', image)
    }
    const token = localStorage.getItem('token')

    try {
      const response = await fetch(
        isEditMode
          ? `http://127.0.0.1:5000/edit-post/${post.id_post_sa}`
          : 'http://127.0.0.1:5000/create-post',
        {
          method: isEditMode ? 'PUT' : 'POST',
          body: formData,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(
          errorData.message ||
            (isEditMode ? 'Error al editar el post' : 'Error al crear el post')
        )
      }

      setMessage(
        isEditMode ? 'Post editado con éxito!' : 'Post creado con éxito!'
      )
      if (!isEditMode) {
        setTitle('')
        setDescription('')
        setImage(null)
      } else {
        navigate('/sapiens-dashboard')
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`)
    }
  }

  return (
    <div className='mx-4 mt-8'>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col gap-4 justify-center'
      >
        <div className='flex gap-2'>
          <p>Título</p>
          <input
            type='text'
            name='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className='text-black'
          />
        </div>
        <div>
          <p>Descripción</p>
          <textarea
            name='description'
            id='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='w-full text-black'
            required
          ></textarea>
        </div>
        <div>
          <p>Portada</p>
          <input
            type='file'
            name='portada'
            id='portada'
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <button
          className='bg-primary-text-color text-black font-bold py-2 px-4 rounded-lg w-1/2'
          type='submit'
        >
          {isEditMode ? 'Editar publicación' : 'Crear publicación'}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  )
}

export default SapiensPost
