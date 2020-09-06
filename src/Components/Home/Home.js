import React, { useEffect, useState } from "react";

import "./Home.css";
import Post from "../Post/Post";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
      });
  }, []);
  return (
    <div className="container">
      {posts.map((post) => {
        return (
          <Post key={post.id} post={post}>
            <Link to={"/post/" + post.id} style={{ textDecoration: "none" }}>
              <Button
                style={{ padding: "5px" }}
                variant="contained"
                color="primary"
              >
                Show details
              </Button>
            </Link>
          </Post>
        );
      })}
    </div>
  );
};

export default Home;