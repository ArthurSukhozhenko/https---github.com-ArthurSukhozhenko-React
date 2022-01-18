import React from "react";
import s from './Profile.module.css';


const Profile = () => {
  return (
    <div className={s.profile}>
      <div>
        <img src="https://cdn.pixabay.com/photo/2017/08/02/01/02/wooden-2569336_960_720.jpg" />
      </div>
      <div>
        ava+description
      </div>
      <div>
        My Post
        <div>New Post</div>
      </div>
      <div className={s.posts}>
        <div className={s.item}>Post 1</div>
        <div className={s.item}>Post 2</div>
      </div>
    </div>
  );
};

export default Profile;
