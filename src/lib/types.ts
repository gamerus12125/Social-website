export type User = {
  id: number;
  name: string;
  email: string;
};

export type Post = {
  id: number;
  title: string;
  description: string;
  author_id: number;
  author: string;
};

export type Message = {
  id: number;
  text: string;
  author_id: number;
  author: string;
  chat_id: number
};

export type Chat = {
  id: number
  messages: Message[]
  icon: string
}