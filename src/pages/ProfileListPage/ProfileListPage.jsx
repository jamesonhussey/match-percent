import * as usersApi from '../../utilities/users-api'

export default async function ProfileListPage({userId}) {
  const profiles = await usersApi.showAll(userId)
  return (
    <>
      <h1>ProfileListPage</h1>
      {profiles}
    </>
  );
}