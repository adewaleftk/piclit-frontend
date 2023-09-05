import '../styles/homepage.css'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'

function Homepage() {
  const navigate = useNavigate();

  function handleTryItNow(event) {
    event.preventDefault;
    navigate('/register');
  }
  return (
    <div className='homepage'>
        <Navbar />
        <div className='homepage-body'>
            <p className='rainbow-text'>Don&apos;t let your images take too much space</p>
            <p>Try PicLit today and</p>
            <p>See how much you can save</p> 
            <p>Without losing your image&apos;s quality!</p>
            <button onClick={handleTryItNow}>Try PicLit for Free!</button>
        </div>
    </div>
  )
}

export default Homepage