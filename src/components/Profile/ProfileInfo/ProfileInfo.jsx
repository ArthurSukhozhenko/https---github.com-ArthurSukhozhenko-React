import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div className={s.content}>
      <div>
        <img
          className={s.avatar}
          src="https://cdnuploads.aa.com.tr/uploads/Contents/2020/08/20/thumbs_b_c_a6be7ef2836b17de46a92e431fe2d60f.jpg?v=114221"
        />
      </div>
      <div className={s.descriptioBlock}>
        "Укроп" — Перша Українська соціальна мережа .
      </div>
    </div>
  );
};

export default ProfileInfo;
