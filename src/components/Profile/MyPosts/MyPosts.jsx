import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

  let postData = [
    { id: 1, message: "Hi, how are you?", likeCount: 12 },
    { id: 2, message: "It's my first post", likeCount: 11 }
  ];

  return (
    <div className={s.myposts}>
      <h2>Моя лента</h2>
      <div className={s.addPost}>
        <textarea name="" id="" cols="30" rows="1"></textarea>
        <button>Отправить</button>
      </div>
      <div className={s.posts}>
        <Post message={postData[0].message} likeCount={postData[0].likeCount} />
        <Post message={postData[1].message} likeCount={postData[1].likeCount} />
      </div>
    </div>
  );
};

export default MyPosts;
