import { useEffect, useState } from 'react';
import * as usersService from '../../utilities/users-service';
import * as usersApi from '../../utilities/users-api'

export default function ProfileEditForm({ user, setUser }) {
    const [credentials, setCredentials] = useState({
        bio: "",
        personalityType: "",
        gender: "",
        gendersToFilterBy: "",
    });

    const [error, setError] = useState('');

    function handleChange(evt) {
        setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
        setError('');
    }

    async function handleSubmit(evt) {
        // Prevent form from being submitted to the server
        evt.preventDefault();

        const token = localStorage.getItem('token')

        try {

            
            const token = await usersApi.editProfile(user._id, credentials);
            localStorage.setItem('token', token)

            const updatedUser = usersService.getUser()

            setUser(updatedUser);
        } catch {
            // setError('Profile change failed');
        }
    }
useEffect(() => {

}, [user, credentials])

    return (
        <div>
            <div className="form-container">
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <label>Bio</label>
                    <input type="text" name="bio" value={credentials.bio} onChange={handleChange} />
                    <label>Personality Type: </label>
                    <select name="personalityType" value={credentials.personalityType} onChange={handleChange} id="">
                        <option value="IMDB">IMDB (Default)</option>
                        <option value="ISTJ">ISTJ</option>
                        <option value="ISFJ">ISFJ</option>
                        <option value="INFJ">INFJ</option>
                        <option value="INTJ">INTJ</option>
                        <option value="ISTP">ISTP</option>
                        <option value="ISFP">ISFP</option>
                        <option value="INFP">INFP</option>
                        <option value="INTP">INTP</option>
                        <option value="ESTP">ESTP</option>
                        <option value="ESFP">ESFP</option>
                        <option value="ENFP">ENFP</option>
                        <option value="ENTP">ENTP</option>
                        <option value="ESTJ">ESTJ</option>
                        <option value="ESFJ">ESFJ</option>
                        <option value="ENFJ">ENFJ</option>
                        <option value="ENTJ">ENTJ</option>
                    </select>
                    <label>Gender</label>
                    <select name="gender" value={credentials.gender} onChange={handleChange} id="">
                        <option value="Default">Default</option>
                        <option value="Woman">Woman</option>
                        <option value="Man">Man</option>
                        <option value="Nonbinary">Nonbinary</option>
                    </select>
                    <label>Gender(s) to Filter By</label>
                    <select name="gendersToFilterBy" id="" value={credentials.gendersToFilterBy} onChange={handleChange}>
                        <option value="Default">Default</option>
                        <option value="Woman">Woman</option>
                        <option value="Man">Man</option>
                        <option value="Nonbinary">Nonbinary</option>
                        <option value="All">All</option>
                    </select>
                    <button type="submit">accept</button>
                </form>
            </div>
            <p className="error-message">&nbsp;{error}</p>
        </div>
    );
}