import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  return (
    <div className={s.myposts}>
      <h2>Моя лента</h2>
      <div className={s.addPost}>
        <textarea name="" id="" cols="30" rows="1"></textarea>
        <button>Отправить</button>
      </div>
      <div className={s.posts}>
        <Post message="Hi, how are you?" likeCount="0" />
        <Post message="It's my first post" likeCount="23" />
      </div>
    </div>
  );
};

export default MyPosts;
