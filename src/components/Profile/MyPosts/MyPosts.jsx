import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let posts = [
    { id: 1, message: "Hi, how are you?", likeCount: 12 },
    { id: 2, message: "It's my first post", likeCount: 11 },
    { id: 3, message: "I'm learn React", likeCount: 17 },
    { id: 4, message: "I love JavaScript", likeCount: 78 },
    { id: 5, message: "You like it?", likeCount: 45 },
  ];

  let postsElement = posts.map((p) => (
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
