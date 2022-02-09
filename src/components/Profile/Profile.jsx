import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div>
      <div className={s.content}>
        <div>
          <img
            className={s.avatar}
            src="https://cdn.pixabay.com/photo/2017/08/02/01/02/wooden-2569336_960_720.jpg"
          />
        </div>
        <div className={s.bio}>
          "Bubble" — одна из самых популярных социальных сетей, число
          пользователей которой превышает 1 миллиард по всему миру. "Bubble"
          обычно используется для обмена фотографиями и вашей повседневной
          деятельностью в основном с помощью изображений.
        </div>
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;
