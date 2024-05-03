import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import * as usersApi from '../../utilities/users-api'

export default function ProfileDeleteForm({ user }) {
    const [credentials, setCredentials] = useState({
        name: "",
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


            if (user.name == credentials.name) {
                await usersApi.deleteUser(user._id)
            }
            // await usersApi.editProfile(user._id, credentials);
            // localStorage.setItem('token', token)

            // setUser(user);
        } catch {
            setError('Profile delete failed');
        }
    }

    return (
        <div>
            <div className="form-container">
                <p>To delete profile, type your name here and press the delete button.</p>
                <form autoComplete="off" onSubmit={handleSubmit}>

                    <label>Name</label>
                    <input type="text" name="name" value={credentials.name} onChange={handleChange} />
                    <button type="submit">Delete Profile</button>
                </form>
            </div>
            <p className="error-message">&nbsp;{error}</p>
        </div>
    );
}