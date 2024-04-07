"use client";
import Button from "@/components/ui/Button/Button";
import Input from "@/components/ui/Input/Input";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const initialState = {
  message: "",
};

const page = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  return (
    <main>
      <form
        action={(e) =>
          axios
            .post("/api/users", e)
            .then((res) =>
              res.data.message == "success"
                ? router.push("/")
                : setError(res.data.message)
            )
            .catch((err) => setError(err.response.data.message))
        }
        className="max-w-fit mx-auto border-4 border-indigo-500 rounded-xl py-4 px-8 flex flex-col gap-4"
      >
        <h2 className="text-center text-xl">Register</h2>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 justify-between items-center">
            <label htmlFor="email">Email</label>
            <Input id="email" name="email" type="email" required={true} />
          </div>
          <div className="flex gap-2 justify-between items-center">
            <label htmlFor="name">Name</label>
            <Input id="name" name="name" type="text" required={true} />
          </div>
          <div className="flex gap-2 justify-between items-center">
            <label htmlFor="password">Password</label>
            <Input
              id="password"
              name="password"
              type="password"
              required={true}
            />
          </div>
          <div className="flex gap-2 justify-between items-center">
            <label htmlFor="password">Password again</label>
            <Input
              id="password_again"
              name="password_again"
              type="password"
              required={true}
            />
          </div>
        </div>
        <Button type="submit">Register</Button>
        <span className="text-red-600">{error ? error : ""}</span>
      </form>
    </main>
  );
};

export default page;
