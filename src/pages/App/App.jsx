import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import EditProfilePage from '../EditProfilePage/EditProfilePage';
import ProfileListPage from '../ProfileListPage/ProfileListPage';
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service'

export default function App() {
  const [user, setUser] = useState(getUser());
  useEffect(() => {
    console.log("Updating user.")
  }, [user])
  // const [profile, setProfile]
  console.log(user)
  return (
    <main className="App">
      { user ?
          <>
            <NavBar user = {user} setUser={setUser}/>
            <Routes>
              {/* Route components in here */}
              <Route path="/profile/edit" element={<EditProfilePage setUser={setUser} user={ user }/>} />
              <Route path="/profile/list" element={<ProfileListPage user={ user }/>} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser}/>
      }
    </main>
  );
}
