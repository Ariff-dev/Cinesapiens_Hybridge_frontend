import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SapiensDashboard = () => {
  const [posts, setPosts] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/posts')
        if (!response.ok) {
          throw new Error('Error al cargar los posts')
        }
        const data = await response.json()
        setPosts(data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchPosts()
  }, [])

  // Función para manejar la eliminación de un post
  const handleDelete = async (postId) => {
    const token = localStorage.getItem('token')
    console.log('Token:', token)

    try {
      const response = await fetch(
        `http://127.0.0.1:5000/delete-post/${postId}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Error al eliminar el post')
      }

      // Actualizar la lista de posts después de la eliminación
      setPosts(posts.filter((post) => post.id_post_sa !== postId))
    } catch (error) {
      console.error('Error al eliminar el post:', error)
      alert(`Error: ${error.message}`)
    }
  }

  const handleEdit = (post) => {
    navigate('/sapiens-post', { state: { post } })
  }

  return (
    <div className='container mx-auto mt-8'>
      <h1 className='text-2xl font-bold mb-6'>
        Administración de Publicaciones
      </h1>
      <div className='grid gap-4'>
        {posts.map((post) => (
          <div
            key={post.id_post_sa}
            className='border rounded p-4 flex justify-between items-center'
          >
            <h2 className='text-lg font-semibold'>{post.post_name}</h2>
            <div className='flex gap-2'>
              <button
                onClick={() => handleEdit(post)}
                className='bg-blue-500 text-white px-3 py-1 rounded'
              >
                Editar
              </button>
              <button
                onClick={() => handleDelete(post.id_post_sa)}
                className='bg-red-500 text-white px-3 py-1 rounded'
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SapiensDashboard
