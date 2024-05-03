import "./EditProfilePage.css"
import ProfileEditForm from "../../components/ProfileEditForm/ProfileEditForm";
// import ProfileDeleteForm from "../../components/ProfileDeleteForm/ProfileDeleteForm";

export default function EditProfilePage({ user, setUser }) {
  console.log(user)

  return (
    <>
      <h1>EditProfilePage</h1>
      <p>Username: <span className="blue-text">{user.name}</span></p>
      <p>Bio: <span className="blue-text">{user.profile.bio}</span></p>
      <p>Gender: <span className="blue-text">{user.profile.gender}</span></p>
      <p>Filter Preference: <span className="blue-text">{user.profile.gendersToFilterBy}</span></p>
      <p>Personality Type: <span className="blue-text">{user.profile.personalityType}</span></p>

      <ProfileEditForm user = { user } setUser={setUser}/>
      {/* <ProfileDeleteForm user = { user }/> */}
    </>
  );
}
