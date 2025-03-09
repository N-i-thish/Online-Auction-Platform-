import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent page reload
    setError(''); // Reset error state

    if (!username || !password) {
      setError('Username and password are required');
      return;
    }

    try {
       await axios.post('http://localhost:5001/signup', {
        username,
        password,
      });

      alert('Signup successful! Please sign in.');
      navigate('/signin'); // Redirect to signin page
    } catch (err) {
      console.error('Signup Error:', err);

      if (err.response) {
        setError(err.response.data?.message || 'Signup failed. Try again.');
      } else if (err.request) {
        setError('No response from server. Check your connection.');
      } else {
        setError('Unexpected error occurred.');
      }
    }
  };

  return (
    <div className="form-container">
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Signup</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default Signup;
