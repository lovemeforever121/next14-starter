"use server";
import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDb } from "./utils";

export const createPost = async (formData) => {
  const { title, desc, slug, img, userId } = Object.fromEntries(formData);
  try {
    connectToDb();
    const newPost = new Post({ title, desc, slug, img, userId });
    await newPost.save();
    revalidatePath("/blogs");
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDb();
    await Post.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
  }
};
