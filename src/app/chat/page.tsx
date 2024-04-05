"use client";
import { ChatSection } from "@/components/ChatSection/ChatSection";
import { Chats } from "@/components/Chats/Chats";
import axios from "axios";
import { useEffect, useState } from "react";

const chatPage = () => {
  const [chat, setChat] = useState();
  const [chats, setChats] = useState();
  useEffect(() => {
    axios.get("/api/chats").then((res) => setChats(res.data));
  }, []);

  const createNewChat = () => {
    axios
      .post("/api/chats")
      .then((res) => axios.get("/api/chats").then((res) => setChats(res.data)));
  };

  return (
    <main className="w-full sm:flex sm:px-5">
      {chats ? (
        <>
          <Chats chats={chats} setChat={setChat} createChat={createNewChat} />
          {chat ? <ChatSection chat={chat} /> : ""}
        </>
      ) : (
        "Loading"
      )}
    </main>
  );
};

export default chatPage;
