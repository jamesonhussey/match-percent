import * as usersService from '../../utilities/users-service'
import { useState } from 'react';
import ProfileCard from './ProfileCard'

export default function ProfileListPage({user, allUsers}) {
  console.log(allUsers)
  const ProfileListItems = allUsers.map((user, idx) => (
    <ProfileCard index={idx} user={user} activeUser={user}/>
  ))
  return (
    <>
      <h1>ProfileListPage</h1>
      <ul>{ProfileListItems}</ul>
    </>
  );
}