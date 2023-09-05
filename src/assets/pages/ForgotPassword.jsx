import '../styles/forgotpassword.css'
import { useState } from 'react';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState('');
  const [emailSendError, setEmailSendError] = useState('');

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
          setEmailSent('Password reset email sent. Please check your email.');
          setEmailSendError('');
        } else {
          const data = await response.json();
          setEmailSendError(data.error);
          setEmailSent('');
        }
      } catch (error) {
        setEmailSendError('Password reset failed. Please try again later.');
        setEmailSent('');
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
          {emailSent && <p>{emailSent}</p>}
          {emailSendError && <p>{emailSendError}</p>}
        </div>
    </div>
  )
}

export default ForgotPassword