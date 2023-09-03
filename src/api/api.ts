import axios from "axios"


export type Post = {
    id: number;
    slug: string;
    url: string;
    title: string;
    content: string;
    image: string;
    thumbnail: string;
    status: string;
    category: string;
    publishedAt: string;
    updatedAt: string;
    userId: number;
  }

export const api = {
    getPosts: async() => {
        return (await axios.get<Post[]>('https://jsonplaceholder.org/posts')).data
    }
}