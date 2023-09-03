import { useState } from 'react';
import '../styles/resetpassword.css'

function ResetPassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add logic to submit the new password to your backend
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

        <button type="submit">Reset Password</button>
        </div>
      {/* Display success message here if the password reset was successful */}
    </div>
  );
}

export default ResetPassword;
