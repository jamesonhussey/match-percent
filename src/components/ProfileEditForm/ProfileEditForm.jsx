import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import * as usersApi from '../../utilities/users-api'

export default function LoginForm({ user }) {
  const [credentials, setCredentials] = useState({
    bio: user.profile.bio,
    personalityType: user.profile.personalityType,
    gender: user.profile.gender,
    gendersToFilterBy: user.profile.gendersToFilterBy,
  });

  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
        console.log(credentials)
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Bio</label>
          <input type="text" name="bio" value={credentials.bio} onChange={handleChange} />
          <label>Personality Type</label>
          <input type="text" name="personalityType" value={credentials.personalityType} onChange={handleChange} />
          <label>Gender</label>
          <select name="gender" value={credentials.gender} onChange={handleChange} id="">
            <option value="d">d</option>
            <option value="m">m</option>
            <option value="f">f</option>
            <option value="o">o</option>
            <option value="pnta">pnta</option>
          </select>
          <label>Gender(s) to Filter By</label>
          <select name="gendersToFilterBy" id="" value={credentials.gendersToFilterBy} onChange={handleChange}>
            <option value="m">m</option>
            <option value="f">f</option>
            <option value="o">o</option>
            <option value="all">all</option>
          </select>
          <button type="submit">accept</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}