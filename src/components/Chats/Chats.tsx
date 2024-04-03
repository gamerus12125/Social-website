import { useSession } from "@/lib/hooks/useSession";
import { Chat } from "@/lib/types";
import axios from "axios";


export const Chats = ({chats, setChat}: {"chats": Chat[], "setChat": Function}) => {
  const session = useSession();
  return (
    <div className="flex flex-col border-4 border-indigo-800 w-fit">
      <ul>
        {chats.map((chat) => (
          <li key={chat.id}>
            <button type="button" onClick={() => setChat(chat)}>
              <img
                className="rounded-full w-14 h-14"
                src={chat.icon}
                alt={"icon"}
              />
            </button>
          </li>
        ))}
        <li>
          <button type="button" onClick={() => axios.post("/api/chats")}>
          <img
                className="rounded-full w-14 h-14"
                src="add_button.svg"
                alt={"add"}
              />
          </button>
          </li>
      </ul>
    </div>
  );
};
