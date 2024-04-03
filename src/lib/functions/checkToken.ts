import { env } from "process"
const jwt = require("jsonwebtoken")

export const checkToken = (token: string) => {
    console.log(process.env.JWT_SECRET)
    try {
        return jwt.verify(token, env.JWT_SECRET)
    }
    catch(err) {
        return false
    }
    
}