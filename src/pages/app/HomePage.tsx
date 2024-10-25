import Apply from '../../components/home/Apply'
import HomeCarrousel from '../../components/home/HomeCarrousel'

export const HomePage = () => {
  return (
    <main className='mx-4 flex flex-col gap-6'>
      <HomeCarrousel />
      <Apply />
    </main>
  )
}
