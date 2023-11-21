import React from "react";

interface ProfileDetailsProps {
  profileImage?: string | null;
  profileName: string;
  profileClass: string;
}

export default function ProfileDetails({ profileImage = null, profileName, profileClass }: ProfileDetailsProps) {
  return (
    <li>
      <div className="profile-details">
        <div className="profile-content">{profileImage && <img src={`/${profileImage}.jpg`} alt="profileImg" />}</div>
        <div className="name-class">
          <div className="profile-name">{profileName}</div>
          <div className="profile-class">{profileClass}</div>
        </div>
        <i className="mdi mdi-logout-variant" />
      </div>
    </li>
  );
}
