import '../styles/forgotpassword.css'
import { useState } from 'react';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
      setEmail(e.target.value);
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
          <button>Send OTP</button>
        </div>
    </div>
  )
}

export default ForgotPassword