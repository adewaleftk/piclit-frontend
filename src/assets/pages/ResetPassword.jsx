import { useState } from 'react';
import '../styles/resetpassword.css'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function ResetPassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { token } = useParams();
  const navigate = useNavigate();

  const handleResetPassword = async () => {
    try {
      // Send a request to your server to verify the token and reset the password
      const response = await fetch(`https://piclit-backend.onrender.com/api/v1/reset/reset-password/${token}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newPassword }),
      });
  
      if (response.ok) {
        // Password reset was successful
        navigate('/login'); // Redirect the user to the login page or another appropriate page
      } else {
        // Handle password reset failure (e.g., show an error message)
        console.error('Password reset failed.');
        console.log('Token:', token);
      }
    } catch (error) {
      console.error('An error occurred while resetting the password:', error);
    }
  };

  return (
    <div className='reset-password'>
        <div className='reset-password--box'>
        <h2>Reset Your Password</h2>
        <label htmlFor="new-password">New Password:</label>
        <input
          type="password"
          id="new-password"
          name="new-password"
          placeholder='Enter New Password'
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />

        <label htmlFor="confirm-password">Confirm Password:</label>
        <input
          type="password"
          id="confirm-password"
          name="confirm-password"
          placeholder='Verify New Password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        {/* Display validation errors here if needed */}

        <button onClick={handleResetPassword}>Reset Password</button>
        </div>
      {/* Display success message here if the password reset was successful */}
    </div>
  );
}

export default ResetPassword;
