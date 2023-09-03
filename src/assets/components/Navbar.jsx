import '../styles/navbar.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo'>
            <p><span className='pic'>Pic</span><span className='lit'>Lit</span></p>
        </div>
        <div className='nav-links'>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to="/register">Sign Up</NavLink>
        </div>
    </div>
  )
}

export default Navbar