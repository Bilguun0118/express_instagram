import { Router } from "express";
// , getUser, getUsers, updateUser, deleteUser, createUser, forgotPassword, resetPassword
// import { protect } from ""
import {registerUser, loginUser, getUsers, deleteUser } from "../controller/usersController.js"
const usersRouter = Router();
// usersRouter.route('/').get(getBla);
usersRouter.post('/register', registerUser);
usersRouter.post('/login', loginUser);
usersRouter.delete('/deleteaccount/:id', deleteUser);
usersRouter.get('/', getUsers);
// usersRouter.route('/login').post(userLogin);

export default usersRouter;