"use client";

import { PostItem } from "@/components/PostItem/Postitem";
import Button from "@/components/ui/Button/Button";
import Input from "@/components/ui/Input/Input";
import { useSession } from "@/lib/hooks/useSession";
import { Post } from "@/lib/types";
import axios from "axios";
import { useEffect, useState } from "react";

const posts = () => {
  const [posts, setPosts] = useState<Post[]>();
  const session = useSession();
  useEffect(() => {
    axios
      .get("api/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }, []);
  const addPost = (e: FormData) => {
    axios
      .post("/api/posts", {
        title: e.get("title"),
        description: e.get("description"),
        author_id: session?.user.id,
      })
      .then((res) =>
        axios
          .get("api/posts")
          .then((res) => setPosts(res.data))
          .catch((err) => console.log(err))
      );
  };

  return (
    <main>
      <h1 className="text-center text-3xl">Posts</h1>
      <h2>Add post</h2>
      <form action={(e) => addPost(e)} className="my-5 border-4 flex flex-col gap-1 sm:flex-row items-center">
        <label htmlFor="title">Title</label>
        <Input type="text" id="title" name="title" required={true} />
        <label htmlFor="description">description</label>
        <Input
          type="text"
          id="description"
          name="description"
          required={true}
        />
        <Button type="submit">Add post</Button>
      </form>
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
