"use client";
import { useSession } from "@/lib/hooks/useSession";
import LinkButton from "../ui/LinkButton/LinkButton";
import { useState } from "react";
LinkButton;
const Header = () => {
  const [menuActive, toggleMenuActive] = useState(false);
  const session = useSession();
  return (
    <header className="p-3 sm:p-6 sticky">
      <div className={`${menuActive ? "bg-indigo-500 rounded" : ""} p-3`}>
      <button
        type="button"
        onClick={() =>
          menuActive ? toggleMenuActive(false) : toggleMenuActive(true)
        }
      >
        <img
          src={menuActive ? "/menu_button-active.svg" : "/menu_button.svg"}
          className="w-10 sm:hidden"
          alt="menu"
        />
      </button>
      <nav
        className={`${
          menuActive ? "flex flex-col" : "hidden"
        } sm:flex sm:items-center gap-4`}
      >
        <LinkButton href="/">HomePage</LinkButton>
        {session ? (
          <>
            <LinkButton href="/profile">Profile</LinkButton>
            <LinkButton href="/posts">Posts</LinkButton>
            <LinkButton href="/chat">Chat</LinkButton>
          </>
        ) : (
          <>
            <LinkButton href="/login">Login</LinkButton>
            <LinkButton href="/register">Register</LinkButton>
          </>
        )}
      </nav>
      </div>
    </header>
  );
};

export default Header;
