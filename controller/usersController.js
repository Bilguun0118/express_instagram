import asyncHandler from "express-async-handler";
import { User } from "../models/user";
import { MyError } from "../utils/myError"

//register
export const registerUser = async(req, res, next) => {
    const user = await User.create(req.body);
    //const token = user.getJsonWebToken();
    res.status(200).json({
        success: true,
        user: user,
        message: "hello"
    });
};

//login

export const loginUser = asyncHandler(async(req, res, next) => {
    const {email, password} = req.body;
    //orolt shalgana
    if(!email || !password){
        throw new MyError("email bolon nuuts ogee damjuulna uu?", 404);
    }

    //Tuhain hereglegchig haina
    const user = await User.findOne({email}).select("+password");
    if(!user){
        throw new MyError("email bolon nuuts egee zow oruulna uu?", 401);
    }

    const pass = await user.checkPassword (password);
    if(!pass) {
        throw new MyError("pass zow oruulna uu?", 401);
    }
    res.status(200).json({
        success: true,
        token: user.getJsonWebToken(),
        user: user,
    });
});

export const getUsers = asyncHandler(async(req, res, next) => {
    const user = await User.find();
    
    res.status(200).json({
        success: true,
        user: user,
    });
});


export const deleteUser = asyncHandler(async( req, res, next) => {
    const user = await User.findById(req.params.id);
    if(!user){
        throw new MyError("iim herglegch oldsongui !!!", 401);
    }
    user.remove();
    res.status(200).json({
        success: true
    });
});