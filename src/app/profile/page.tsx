"use client";
import Button from "@/components/ui/Button/Button";
import Input from "@/components/ui/Input/Input";
import LinkButton from "@/components/ui/LinkButton/LinkButton";
import { getSession } from "@/lib/functions/getSession";
import { useSession } from "@/lib/hooks/useSession";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const profile = () => {
  const session = useSession();
  const router = useRouter();
  useEffect(() => {
    if (!getSession()) {
      router.push("/");
    }
  }, [document.cookie]);
  
  const addPost = (e: FormData) => {
    axios
      .post("/api/posts", {
        title: e.get("title"),
        description: e.get("description"),
        author_id: session?.user.id,
      })
      .then((res) => console.log(res));
  };

  return (
    <main>
      <h1 className="text-center">Profile</h1>
      <h2>Add post</h2>
      <form action={(e) => addPost(e)} className="my-5 border-4">
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
      <LinkButton href="/api/logout">Выйти</LinkButton>
    </main>
  );
};

export default profile;
