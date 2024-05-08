import "./EditProfilePage.css"
import ProfileEditForm from "../../components/ProfileEditForm/ProfileEditForm";
import ProfileDeleteForm from "../../components/ProfileDeleteForm/ProfileDeleteForm";
import { Link } from "react-router-dom";
import * as userService from '../../utilities/users-service'
import MatchPercentLogoText from "../../components/MatchPercentLogoText/MatchPercentLogoText";

export default function EditProfilePage({ user, setUser }) {
  function handleLogOut() {
    userService.logOut()
    setUser(null)
  }
  return (
    <>
      <div className='header-logo-text-and-button'>
        <MatchPercentLogoText />
        <div className='profile-edit-page-button'>
          
        </div>
      </div>
      <p>Username: <span className="blue-text">{user.name}</span></p>
      <p>Bio: <span className="blue-text">{user.profile.bio}</span></p>
      <p>Gender: <span className="blue-text">{user.profile.gender}</span></p>
      <p>Filter Preference: <span className="blue-text">{user.profile.gendersToFilterBy}</span></p>
      <p>Personality Type: <span className="blue-text">{user.profile.personalityType}</span></p>

      <ProfileEditForm user={user} setUser={setUser} />
      <div>
        <Link to="" onClick={handleLogOut} >
          <button>Log Out</button>
        </Link>
      </div>

      <ProfileDeleteForm user={user} />
    </>
  );
}
