import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import EditProfilePage from '../EditProfilePage/EditProfilePage';
import ProfileListPage from '../ProfileListPage/ProfileListPage';
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service'
import { getAllUsers } from '../../utilities/users-service';
//users = getUsers(){get all} -> controller?
export default function App() {
  const [user, setUser] = useState(getUser());
  const [allUsers, setAllUsers] = useState(null);
  const getUsers = async ()=> {
    console.log("Hello")
    try {
    const response = await getAllUsers(user._id)
    setAllUsers(response)
    console.log("response" + response)
    }
    catch(err) {
      console.log(err)
    }

   }
   
   useEffect(() => {
   getUsers()
   
   },[])
  // console.log(allUsers)


  return (
    <main className="App">
      { user && allUsers ?
          <>
            <NavBar user = {user} setUser={setUser}/>
            
            <Routes>
              {/* Route components in here */}
              <Route path="/profile/edit" element={<EditProfilePage setUser={setUser} user={ user }/>} />
              <Route path="/" element={<ProfileListPage user={user} allUsers={allUsers}/>} />
            </Routes>

            
          </>
          :
          <AuthPage setUser={setUser}/>
      }
    </main>
  );
}
