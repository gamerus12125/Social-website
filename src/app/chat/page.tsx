"use client";
import { ChatSection } from "@/components/ChatSection/ChatSection";
import { Chats } from "@/components/Chats/Chats";
import { Chat } from "@/lib/types";
import axios from "axios";
import { useEffect, useState } from "react";

const initChat: Chat[] = [
  {
    id: 1,
    messages: [
      {
        id: 1,
        text: "test",
        author: "test",
        author_id: 1,
        chat_id: 1,
      },
      {
        id: 2,
        text: "test",
        author: "test",
        author_id: 2,
        chat_id: 1,
      },
    ],
    icon: "https://yastatic.net/naydex/yandex-search/1BYU6E296/a7681akvGS/-xhZcuE2OOsOAvILTi4ND9maRHKqs-bnNi19vvmprdIrYLu3oeHGJJOGwm5mIr9CeGUyoD_3X1aiVFl0-NvqlugdHT6idyK3WUDvRwIpBAvG0Vk6qvT6tT06ZujxvaSEdWG-2JuZ4levrKgWElzBD31tMPcmvB9FyTw",
  },
];

const chatPage = () => {
  const [chat, setChat] = useState();
  const [chats, setChats] = useState();
  useEffect(() => {
    axios.get("/api/chats").then((res) => setChats(res.data));
  }, []);

  return (
    <main className="flex px-5">
      {chats ? (
        <>
          <Chats chats={chats} setChat={setChat} />
          {chat ? <ChatSection chat={chat} /> : ""}
        </>
      ) : (
        "Loading"
      )}
    </main>
  );
};

export default chatPage;
