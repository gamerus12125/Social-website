import { Chat } from "@/lib/types";
import styles from "./Chats.module.css"


export const Chats = ({chats, setChat, createChat}: {"chats": Chat[], "setChat": Function, "createChat": Function}) => {
  return (
      <ul className="p-1 border-4 border-indigo-800 flex sm:flex-col gap-1 overflow-x-scroll sm:overflow-y-scroll sm:overflow-x-hidden">
        {chats.map((chat) => (
          <li key={chat.id}>
            <button type="button" onClick={() => setChat(chat)} className="w-14 h-14">
              <img
                className={`rounded-full ${styles.img}`}
                src={chat.icon}
                alt={"icon"}
              />
            </button>
          </li>
        ))}
        <li>
          <button type="button" onClick={() => createChat()} className="w-14 h-14">
          <img
                className={`rounded-full ${styles.img}`}
                src="add_button.svg"
                alt={"add"}
              />
          </button>
          </li>
      </ul>
  );
};
