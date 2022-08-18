import { Router } from "express";
import { protect } from "../middleware/protect";
import {newComment, getComments, updateComment, deleteComment} from "../controller/comments";
const commentRouter = Router();


commentRouter.use(protect);
commentRouter.get(":id", getComments);
commentRouter.post("/:id/newcomment",newComment);
commentRouter.put("/:id/updateComment",updateComment);
commentRouter.delete("/:id/deleteComment", deleteComment);

export default commentRouter;