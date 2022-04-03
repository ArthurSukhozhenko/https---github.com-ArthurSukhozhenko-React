import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {


  let postsElement = props.posts.map((p) => (
    <Post message={p.message} likeCount={p.likeCount} />
  ));

  return (
    <div className={s.myposts}>
      <h2>Моя стрічка</h2>
      <div className={s.addPost}>
        <textarea name="" id="" cols="30" rows="1"></textarea>
        <button>Надіслати</button>
      </div>
      <div className={s.posts}>{postsElement}</div>
    </div>
  );
};

export default MyPosts;
