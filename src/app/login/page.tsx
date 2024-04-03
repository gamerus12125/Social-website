"use client";
import Button from "@/components/ui/Button/Button";
import Input from "@/components/ui/Input/Input";
import { useSession } from "@/lib/hooks/useSession";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const initialState = {
  message: "",
};

const page = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const session = useSession();

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session]);

  return (
    <main>
      <form
        action={(e) =>
          axios
            .post("/api/login", e)
            .then((res) =>
              res.data.message == "success"
                ? router.replace("/")
                : setError(res.data.message)
            )
            .catch((error) => setError(error.response.data.message))
        }
        className="max-w-fit mx-auto border-4 border-indigo-500 rounded-xl py-4 px-8 flex flex-col gap-4"
      >
        <h2 className="text-center text-xl">Login</h2>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 justify-between items-center">
            <label htmlFor="email">Email</label>
            <Input id="email" name="email" type="email" required={true} />
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
        </div>
        <Button type="submit">Login</Button>
        <span className="text-red-600">{error ? error : ""}</span>
      </form>
    </main>
  );
};

export default page;
