import React from "react"
import PropTypes from "prop-types";

export default function ProfileDetails({
  profileImage,
  profileName,
  profileClass,
}) {
  return (
    <li>
      <div className="profile-details">
        <div className="profile-content">
          {profileImage && (
            <img src={`/${profileImage}.jpg`} alt="profileImg" />
          )}
        </div>
        <div className="name-class">
          <div className="profile-name">{profileName}</div>
          <div className="profile-class">{profileClass}</div>
        </div>
        <i className="mdi mdi-logout-variant" />
      </div>
    </li>
  );
}

ProfileDetails.propTypes = {
  profileImage: PropTypes.string,
  profileName: PropTypes.string.isRequired,
  profileClass: PropTypes.string.isRequired,
};

ProfileDetails.defaultProps = {
  profileImage: null,
};
