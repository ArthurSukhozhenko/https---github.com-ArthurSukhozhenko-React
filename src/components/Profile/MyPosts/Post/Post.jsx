import React from "react";
import s from './Post.module.css';


const Post = (props) => {
  return (
    <div>
      <div className={s.item}>
        <img src="https://www.volynpost.com/img/modules/news/a/2d/89c6db59bcc5faedda072e84c6e432da/cb-yz2dikefvsy.jpg" alt="" />
        {props.message}
        <div>
          <span>Вподобайки</span> { props.likeCount }
        </div>
      </div>
    </div>

  );
};

export default Post;
