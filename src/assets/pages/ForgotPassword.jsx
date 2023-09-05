import '../styles/forgotpassword.css'
import { useState } from 'react';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch('https://piclit-backend.onrender.com/api/v1/reset/reset-password', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });
  
        if (response.ok) {
          console.log('Password reset email sent. Check your inbox.');
          // setErrorMessage('');
        } else {
          const data = await response.json();
          // setSuccessMessage('');
          console.log(data);
        }
      } catch (error) {
        console.error('An error occurred:', error);
        // setSuccessMessage('');
        // setErrorMessage('Password reset failed. Please try again later.');
      }
    };
  return (
    <div className='forgot-password'>
      <div className='forgot-password--box'>
        <h2>Forgot Password</h2>
        <div className='form-group'>
                <p><label htmlFor="email">Email Address</label></p>
                <input
                    type="email"
                    placeholder="Enter Email Address"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                />
          </div>
          <button onClick={handleSubmit}>Reset Password</button>
        </div>
    </div>
  )
}

export default ForgotPassword