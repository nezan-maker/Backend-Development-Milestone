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
            required: true,
            minlength: 8
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        emailConfirmed: {
            type: Boolean,
            default: false
        },
        emailToken: {
            type: String
        },
        refreshToken: {
            type: String,
            default: null
        },
        tokenVersion: {
            type: Number,
            default: 1
        }
    }, { timestamps: true })
    return usersDB.model("User", userSchema)
}
