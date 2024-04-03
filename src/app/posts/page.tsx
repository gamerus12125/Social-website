"use client";

import { PostItem } from "@/components/PostItem/Postitem";
import { Post } from "@/lib/types";
import axios from "axios";
import { useEffect, useState } from "react";


const posts = () => {
  const [posts, setPosts] = useState<Post[]>();
  useEffect(() => {
    axios
      .get("api/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main>
      <h1 className="text-center text-3xl">Posts</h1>
      {posts?.length ? (
        <ul className="my-10 flex flex-col gap-5">
          {posts.map((post) => (
            <li key={post.id} className="px-5">
              <PostItem post={post} />
            </li>
          ))}
        </ul>
      ) : (
        "Loading"
      )}
    </main>
  );
};

export default posts;
