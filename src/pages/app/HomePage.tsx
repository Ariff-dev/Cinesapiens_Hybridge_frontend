import HomeCarrousel from '../../components/home/HomeCarrousel'

export const HomePage = () => {
  return (
    <main className='mx-4 flex flex-col gap-6'>
      <HomeCarrousel />
      <section className='bg-primary-text-color p-4 flex flex-col items-center gap-4 rounded-lg'>
        <p className='font-bold text-black text-center'>
          ¿Te gustaría ser un creador y compartir tu conocimiento evolutivo?
        </p>
        <button className='bg-primary-color py-2 px-4 rounded-lg'>
          <span>Aplicar</span>
        </button>
      </section>
    </main>
  )
}
