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
  


  return (
    <main>
      <h1 className="text-center">Profile</h1>
      <span className="mx-10">Id - {session?.user.id}</span>
      <LinkButton href="/api/logout">Выйти</LinkButton>
    </main>
  );
};

export default profile;
