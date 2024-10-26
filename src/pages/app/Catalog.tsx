import { useEffect, useState } from 'react'
import PostCard from '../../components/ui/posts/PostCard'

export const Catalog = () => {
  const [posts, setPosts] = useState([]) // Estado para almacenar las publicaciones
  const [loading, setLoading] = useState(true) // Estado de carga

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:5000/posts') // Asegúrate de ajustar la URL según tu backend
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setPosts(data) // Actualiza el estado con las publicaciones
      } catch (error) {
        console.error('Error fetching posts:', error)
      } finally {
        setLoading(false) // Finaliza el estado de carga
      }
    }

    fetchPosts() // Llama a la función para obtener las publicaciones
  }, []) // Solo se ejecuta una vez al montar el componente

  if (loading) {
    return <div>Loading...</div> // Muestra un mensaje de carga mientras se obtienen los datos
  }

  return (
    <section>
      <h1>Catalog</h1>
      <div className='grid grid-cols-2  lg:grid-cols-4'>
        {posts.map((post) => (
          <PostCard key={post.id_post_sa} post={post} />
        ))}
      </div>
    </section>
  )
}
