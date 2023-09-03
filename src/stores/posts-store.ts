import { makeAutoObservable, runInAction } from "mobx";
import { Post, api } from "../api/api";
import { IPromiseBasedObservable, fromPromise } from "mobx-utils";

class PostsStore {
    posts?:  IPromiseBasedObservable<Post[]>;
    loading = false

    constructor() {
        makeAutoObservable(this)
    }

    setPosts = async () => {
        try {
            this.posts = fromPromise(api.getPosts());
            
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    }
}

export default new PostsStore()