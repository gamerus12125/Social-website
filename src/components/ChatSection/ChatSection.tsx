import { Chat, Message } from "@/lib/types";
import styles from "./ChatSection.module.css";
import { useSession } from "@/lib/hooks/useSession";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Input from "../ui/Input/Input";
import Button from "../ui/Button/Button";

export const ChatSection = ({ chat }: { chat: Chat }) => {
  const session = useSession();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>();
  const [userId, setUserId] = useState("");
  const [actionMenu, toggleActionMenu] = useState({
    addPerson: false,
    menu: false,
  });

  const getMessages = () => {
    axios
      .get(`/api/messages/?chat_id=${chat.id}`)
      .then((res) => setMessages(res.data));
  };

  const deleteChat = () => {
    axios.delete(`api/chats/${chat.id}`)
    toggleActionMenu((prev) => ({...prev, menu: false}))
  }

  useEffect(() => {
    getMessages();
  }, [chat]);

  const sendMessage = (e: any) => {
    e.target.value = "";
    axios
      .post(`/api/messages`, {
        message: message,
        chat_id: chat.id,
      })
      .then((res) => getMessages());
  };
  const addPerson = (e: any) => {
    e.preventDefault();
    axios.post("/api/participants", { user_id: userId, chat_id: chat.id });
  };

  return (
    <div
      className={`bg-indigo-500 w-full flex flex-col ${
        chat ? "" : "hidden"
      } p-2 gap-5 ${styles.chat}`}
    >
      <div>
        <div
          className={`${
            actionMenu.menu ? "" : "hidden"
          } bg-teal-600 border-2 border-indigo-950 w-fit p-1 rounded absolute left-14 flex flex-col gap-2`}
        >
          <button
            onClick={() =>
              toggleActionMenu((prev) => ({
                addPerson: prev.addPerson ? false : true,
                menu: prev.menu ? false : true,
              }))
            }
            className="text-white bg-indigo-950 p-2"
          >
            Add person
          </button>
          <button onClick={() => deleteChat()} className="text-white bg-indigo-950 p-2 rounded">
            Delete chat
          </button>
        </div>
        <button
          className="w-10 h-10"
          onClick={() =>
            toggleActionMenu((prev) => ({
              ...prev,
              menu: prev.menu ? false : true,
            }))
          }
        >
          <img
            className="w-full h-full rounded-full"
            src="more_button.svg"
          ></img>
        </button>
        {actionMenu.addPerson ? (
          <form
            className="flex flex-col sm:flex-row items-center gap-2 sm:gap-5 justify-center"
            onSubmit={(e) => addPerson(e)}
          >
            <Input
              id="user_id"
              name="user id"
              type="text"
              placeholder="Id человека"
              required
              onChange={setUserId}
            />
            <Button type="submit">Добавить</Button>
          </form>
        ) : (
          ""
        )}
      </div>
      <div className="bg-indigo-950 rounded-xl p-5 text-white h-screen overflow-y-scroll">
        {messages
          ? messages.map((message) => (
              <div
                key={message.id}
                className={`flex mb-5 ${
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
          className="bg-indigo-800 rounded-full p-1 w-10 h-10"
          onClick={(e) => sendMessage(e)}
        >
          <img src="/send_message.svg" className="w-full h-full"></img>
        </button>
      </div>
    </div>
  );
};
