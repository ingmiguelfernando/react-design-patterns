import React from "react";

export const PostsList = ({ posts }) => {
  return posts ? (
    posts.map((post) => (
      <div key={post.id}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <hr />
      </div>
    ))
  ) : (
    <p>Loading...</p>
  );
};
