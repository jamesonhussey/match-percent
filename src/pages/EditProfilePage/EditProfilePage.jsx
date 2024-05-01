import ProfileEditForm from "../../components/ProfileEditForm/ProfileEditForm";

export default function EditProfilePage({ user }) {
  console.log(user)

  return (
    <>
      <h1>EditProfilePage</h1>
      <p>{user.profile.personalityType}</p>
      <ProfileEditForm user = { user }/>
    </>
  );
}