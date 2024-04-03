import { Chat, Message } from "@/lib/types";
import styles from "./ChatSection.module.css";
import { useSession } from "@/lib/hooks/useSession";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

export const ChatSection = ({ chat }: { chat: Chat }) => {
  const session = useSession();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>()
  console.log(messages)


  useEffect(() => {
    axios.get(`/api/messages/?chat_id=${chat.id}`).then(res => setMessages(res.data))
  }, [])
  
 
  const sendMessage = () => {
    axios.post(`/api/messages`, {
      message: message, chat_id: chat.id
    }).then((res) => console.log(res));
  };

  return (
    <div
      className={`bg-indigo-500 w-full flex flex-col ${
        chat ? "" : "hidden"
      } p-5 gap-5 ${styles.chat}`}
    >
      <div className="bg-indigo-950 rounded-xl p-5 text-white h-screen">
        {messages
          ? messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.author_id == session?.user.id ? "justify-end" : ""
                }`}
              >
                <div className={`bg-teal-600 p-2 rounded-xl w-fit`}>
                  <p className="break-words">{message.text}</p>
                  <span>From: {message.author}</span>
                </div>
              </div>
            ))
          : ""}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          className="w-full p-2 rounded border-indigo-800"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="button"
          className="bg-indigo-800 rounded-full p-1"
          onClick={() => sendMessage()}
        >
          <img src="/send_message.svg" className="w-10 h-10"></img>
        </button>
      </div>
    </div>
  );
};
