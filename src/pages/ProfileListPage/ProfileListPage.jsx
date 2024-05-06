import * as usersService from '../../utilities/users-service'
import { useState } from 'react';
import ProfileCard from './ProfileCard'
import "./ProfileListPage.css"

export default function ProfileListPage({user, allUsers}) {
  console.log(allUsers)
  const ProfileListItems = allUsers.map((user, idx) => (
    <ProfileCard index={idx} user={user} activeUser={user}/>
  ))
  return (
    <>
      <ul className='profile-list-ul'>{ProfileListItems}</ul>
    </>
  );
}