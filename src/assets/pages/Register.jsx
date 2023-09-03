import '../styles/register.css'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    async function handleSignUpSubmit(event) {
        event.preventDefault();
        // setIsLoading(true);
        // setSignupError(null); 
        if (password !== passwordConfirm) {
            // Passwords do not match, show an error message or take appropriate action.
            console.error('Passwords do not match');
            return;
          }

        const baseUrl = 'https://piclit-backend.onrender.com';
        const apiUrl = `${baseUrl}/api/v1/auth/register`;

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
                // Signup successful
                console.log('Signup successful:', responseData.message);
                console.log(responseData);
                // setRegistrationSuccess(true);
                navigate('/login');
            } else {
                // Signup failed, handle the error scenario
                console.error('Signup failed:', responseData.errorMessage);
                console.log(responseData);
                // setSignupError(responseData.errorMessage);
                // Display an error message to the user
            }
        } catch (error) {
            console.error('An error occurred:', error);
            // Handle any unexpected errors
        }finally {
            // setIsLoading(false);
          }
    }
  return (
    <div className='register'>
        <div className='register-box'>
            <h2>Register</h2>
            <div>
                <p><label htmlFor="email">Email Address</label></p>
                <input
                type="email"
                placeholder="example@gmail.com"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
                />
            </div>
            <div>
                <p><label htmlFor="password">Password</label></p>
                <input
                type="password"
                placeholder="Password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
                /> 
            </div>
            <div>
                <p><label htmlFor="password">Confirm Password</label></p>
                <input
                type="password"
                placeholder="Confirm Password"
                id="passwordConfirm"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                required
                /> 
            </div>
            <button onClick={handleSignUpSubmit}>Register</button>
            <span>Have an account already? <NavLink to="/login">Sign In</NavLink></span>
        </div>
    </div>
  )
}

export default Register