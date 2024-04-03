"use client";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { cookies } from "next/headers";

type session = {
  iat: number;
  user: {
    id: number;
  };
};

export const useSession = () => {
  const [user, setUser] = useState<session>();
  const get_session = () => {
    const token = Cookies.get("session");
    if (token) {
      const userData: any = jwtDecode(token);
      if (userData) {
        setUser(userData);
      }
    }
  };
  useEffect(() => {
    const token = Cookies.get("session")
    console.log()
    if (token) {
      const userData: any = jwtDecode(token);
      if (userData) {
          setUser(userData);
        }
      }
    }, [cookies, document.cookie])
  return user;
};
