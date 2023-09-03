import '../styles/homepage.css'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'

function Homepage() {
  const navigate = useNavigate();

  function handleTryItNow(event) {
    event.preventDefault;
    navigate('/compress');
  }
  return (
    <div className='homepage'>
        <Navbar />
        <div className='homepage-body'>
            <p>Introducing the coolest and fastest way of compressing your images</p>
            <p>without reducing the image&apos;s quality</p>
            <p>Guess What??? It&apos;s absolutely free</p>
            <button onClick={handleTryItNow}>Try it Now!</button>
        </div>
    </div>
  )
}

export default Homepage