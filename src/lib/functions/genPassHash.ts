import { genSaltSync, hashSync } from "bcrypt-ts";

const genPassHash = (password: string) => {
  const salt = genSaltSync(10)
  return hashSync(password, salt)
};

export default genPassHash