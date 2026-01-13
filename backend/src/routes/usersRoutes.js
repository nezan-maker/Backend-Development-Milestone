import express from "express"
import { getUsers, signUp } from "../controllers/usersControllers.js"
import { createUserModel } from "../models/User.js"
const createUserRoutes = (usersDB) => {
    const router = express.Router()
    const User = createUserModel(usersDB)
    router.get("/", getUsers(User))
    router.post("/register", signUp(User))
    return router

}
export default createUserRoutes
