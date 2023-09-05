import '../styles/login.css'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const [loginSuccess, setLoginSuccess] = useState('');
    const [loginError, setLoginError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
    
      const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };
    async function handleLoginSubmit(event) {
        event.preventDefault();
        setIsLoading(true);
        setLoginError(null); // Clear previous errors
  
        const baseUrl = 'https://piclit-backend.onrender.com';
        const apiUrl = `${baseUrl}/api/v1/auth/login`;
  
        const requestData = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        };
  
        try {
            const response = await fetch(apiUrl, requestData);
            const responseData = await response.json();
  
            if (response.ok) {
                // Login successful
                console.log('Login successful:', responseData); 
                console.log('User Token:', responseData.token);
                const userToken = responseData.token;
                localStorage.setItem('userToken', userToken);
                // localStorage.setItem('user', JSON.stringify(responseData.data));
                setLoginSuccess('Login Successful. You are now being redirected');
                setTimeout(() => {
                navigate('/compress');
                }, 5000); 
            } else {
                console.error('Login failed:', responseData);
                setLoginError(responseData.error); 
            }
          } catch (error) {
            console.error('An error occurred:', error);
          } finally {
          setIsLoading(false);
        }
    }
  return (
    <div className='login'>
        <div className='login-box'>
            <h2>Login</h2>
            <div className='form-group'>
                <p><label htmlFor="email">Email Address</label></p>
                <input
                    type="email"
                    placeholder="Email Address"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                />
            </div>
            <div className='form-group'>
            <p><label htmlFor="password">Password</label></p>
            <input
                type="password"
                id="password"
                value={password}
                placeholder="Enter Your Password"
                onChange={handlePasswordChange}
                required
            />
            </div>
            {loginError && <p className="error-message">{loginError}</p>}
            <button
                type="submit"
                onClick={handleLoginSubmit}
                className={`loading-button ${isLoading ? "loading" : ""}`}
                disabled={isLoading}
              >
                {isLoading ? "Loading" : "Login"}
            </button>
            <span>Forgot Password? <NavLink to="/forgot">Reset Password</NavLink></span>
            {loginSuccess && <p>{loginSuccess}</p>}
        </div>
    </div>
  )
}

export default Login