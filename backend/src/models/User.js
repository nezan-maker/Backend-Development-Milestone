import mongoose from "mongoose"
export const createUserModel = (usersDB) => {
    if (usersDB.models.User) {
        return usersDB.models.User
    }
    const userSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        email: {
            type:String,
            required:true
        }
    }, { timestamps: true })
    return usersDB.model("User", userSchema)
}
