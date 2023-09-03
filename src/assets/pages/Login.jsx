import '../styles/login.css'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Login() {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
    
      const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };
    async function handleLoginSubmit(event) {
        event.preventDefault();
        // setIsLoading(true);
        // setLoginError(null);
  
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
  
            if (response.ok && responseData.status === true) {
                // Login successful
                console.log('Login successful:', responseData.message); 
                console.log(responseData);
                console.log('User Token:', responseData.data.token);
                // const userToken = responseData.data.token;
                // login(userToken);
                // usePackageStore.setState({ user: responseData.data });
                // localStorage.setItem('user', JSON.stringify(responseData.data));
                // setLoginSuccess(true);
                setTimeout(() => {
                // navigate('/compress');
                }, 5000); 
            } else {
                console.error('Login failed:', responseData.message);
                console.log(responseData);
                // setLoginError(responseData.errorMessage); 
            }
          } catch (error) {
            console.error('An error occurred:', error);
          } finally {
        //   setIsLoading(false);
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
                onChange={handlePasswordChange}
                required
            />
            </div>
            <button onClick={handleLoginSubmit}>Login</button>
            <span>Forgot Password? <NavLink to="/reset">Reset Password</NavLink></span>
        </div>
    </div>
  )
}

export default Login