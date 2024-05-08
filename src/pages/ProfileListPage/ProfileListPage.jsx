import * as usersService from '../../utilities/users-service'
import { useState } from 'react';
import ProfileCard from './ProfileCard'
import "./ProfileListPage.css"
import { Link } from 'react-router-dom';
import MatchPercentLogoText from '../../components/MatchPercentLogoText/MatchPercentLogoText';

export default function ProfileListPage({ user, allUsers }) {
  console.log("profile list page user state name: " + user.profileName)
  // let activeUser = user
  const ProfileListItems = allUsers.map((allUser, idx) => (
    <ProfileCard index={idx} user={allUser} activeUser={user} />
  ))
  return (
    <div className='index-page-container'>
      <div className='header-logo-text-and-button'>
        <MatchPercentLogoText />
        <div className='profile-edit-page-button'>
          <Link to="/profile/edit">
            <img className='profile-edit-page-button-image' src="https://static.vecteezy.com/system/resources/previews/000/367/333/original/edit-profile-vector-icon.jpg" alt="" />
          </Link>
        </div>
      </div>

      <div>
        <ul className='profile-list-ul'>{ProfileListItems}</ul>
      </div>
    </div>
  );
}