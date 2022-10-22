import React from 'react'
import Avatar from "../images/Muhiz-Akanni.jpg"

const Profile = () => {
  return (
    <div className='profile'>
        <div className="profile-image-container">
            <img src={Avatar} alt="profile" id='profile_img' />
        </div>
        <div className="author">
            <h2 id='twitter'>muhiz_akanni</h2>
            <h2 id='slack'>Muakone</h2>
        </div>
    </div>
  )
}

export default Profile