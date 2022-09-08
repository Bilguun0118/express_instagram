import { Router } from "express";
import { protect } from "../middleware/protect.js";
import { follow, following } from "../controller/followController.js";
const followRouter = Router();

followRouter.use(protect);
followRouter.route("/").post(follow);
followRouter.route("/list").post(following);

export default followRouter;