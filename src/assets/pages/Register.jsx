import '../styles/register.css'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const navigate = useNavigate();
    const [signupError, setSignupError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [registrationSuccess, setRegistrationSuccess] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    async function handleSignUpSubmit(event) {
        event.preventDefault();
        setIsLoading(true);
        setSignupError(null); 
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
                setRegistrationSuccess(responseData.message);
                setTimeout(() => {
                    navigate('/login');
                    }, 5000);
            } else {
                // Signup failed, handle the error scenario
                console.error('Signup failed:', responseData.error);
                console.log(responseData);
                console.log(responseData.error);
                setSignupError(responseData.error);
                // Display an error message to the user
            }
        } catch (error) {
            console.error('An error occurred:', error);
            // Handle any unexpected errors
        }finally {
            setIsLoading(false);
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
            {registrationSuccess && <p>{registrationSuccess}</p>}
            {signupError && <p className="error-message">{signupError}</p>}
            <button
                type="submit"
                onClick={handleSignUpSubmit}
                className={`loading-button ${isLoading ? "loading" : ""}`}
                disabled={isLoading}
              >
                {isLoading ? "Loading" : "Register"}
            </button>
            <span>Have an account already? <NavLink to="/login">Sign In</NavLink></span>
        </div>
    </div>
  )
}

export default Register