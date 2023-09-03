import '../styles/homepage.css'
import Navbar from '../components/Navbar'

function Homepage() {
  return (
    <div className='homepage'>
        <Navbar />
        <div className='homepage-body'>
            <p>Introducing the coolest and fastest way of compressing your images</p>
            <p>without reducing the image&apos;s quality</p>
            <p>Guess What??? It&apos;s absolutely free</p>
            <button>Try it Now!</button>
        </div>
    </div>
  )
}

export default Homepage