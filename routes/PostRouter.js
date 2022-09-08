import { Router } from "express";
import { getPosts, newPost, uploadPhoto,deletePost, updatePost, getTimeline } from "../controller/postsController.js";
import { protect } from "../middleware/protect.js";
const postsRouter = Router();
postsRouter.use(protect);
postsRouter.get("/", getPosts);
postsRouter.get("/time", getTimeline);
postsRouter.post('/new', newPost);
postsRouter.put('/:id/photo', uploadPhoto);
postsRouter.delete('/:id/deletePost', deletePost);
postsRouter.put('/:id/updatePost', updatePost);

export default postsRouter;