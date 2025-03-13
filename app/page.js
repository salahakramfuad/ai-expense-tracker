import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: "url('/Images/bullseye-gradient.svg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <Navbar />

      <Hero />
    </div>
  )
}
