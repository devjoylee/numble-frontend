import React from 'react';
import * as S from './styles';
import { profileStatData } from '../../../data';

export const ProfileHeader = () => {
  const { videos, following, followers } = profileStatData;

  return (
    <S.ProfileHeader>
      <img
        src="https://images.unsplash.com/photo-1651070216681-22fe5a718c06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        alt="cherryblossom"
        className="profile-img"
      />
      <div className="profile-username">
        <span>@rachel_the_it</span>
      </div>
      <S.ProfileStats>
        <li>
          <strong className="profile-stat-value">{videos}</strong>
          <span className="profile-stat-name">Videos</span>
        </li>
        <li>
          <strong className="profile-stat-value">{following}</strong>
          <span className="profile-stat-name">Following</span>
        </li>
        <li>
          <strong className="profile-stat-value">{followers}</strong>
          <span className="profile-stat-name">Followers</span>
        </li>
      </S.ProfileStats>
      <button className="profile-edit-btn">Edit Profile</button>
    </S.ProfileHeader>
  );
};