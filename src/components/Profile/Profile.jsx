import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css';


const Profile = () => {
  return (
    <div>
      <div className={s.profile}>
        <div>
          <img src="https://cdn.pixabay.com/photo/2017/08/02/01/02/wooden-2569336_960_720.jpg" />
        </div>
        <div>
          ava+description
        </div>

      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;
