import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
export const getSession = () => {
    const token = Cookies.get("session");
    if (token) {
      const userData: any = jwtDecode(token);
      if (userData) {
        return userData
      }
    }
    return undefined
  };