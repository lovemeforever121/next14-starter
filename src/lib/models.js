import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            min: 3,
            max: 20,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            min: 6,
        },
        img: {
            type: String,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true },
);
const postSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
       img: {
            type: String,
        },
        slug: {
            type: String,
            required: true,
            unique: true,
        }
    },
    { timestamps: true },
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Post = mongoose.models.Post || mongoose.model("Post", postSchema);
