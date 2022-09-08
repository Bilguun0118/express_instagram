import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const {Schema} = mongoose;

const userSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String, //type
        trim: true, //zasah
        lowercase: true, //jijigsgeh
        unique: true, // dawhtsah
        required: [true, 'Email address is required'], //mail zaawal ch gui bh ystoi (neheh)
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'], //zow mail shalgah
    },
    password: {
        type: String,
        minLength: 4,
        required: [true, 'nuuts ugee oruulna uu']
    },
    phone: {
        Number,
    },
    gender: {
        String,
    },
    photo: {
        type: String,
        default: "no-phote.jpg"
    },
    createdAt: {

    },
    location: {
        String,
    },
    bio: String,
    followers: {
        type: Number,
        default: 0,
    },
    following: {
        type: Number,
        default: 0,
    },
    posts: {
        type: Number,
        default: 0
    }
}, 
{timestamps: true}
);

userSchema.pre("save", async function(next) {
    // if(!this.isModefied("password")) next();

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
});

userSchema.pre("remove",async function (next){
    await this.model("Post").deleteMany({createUser: this._id})
    next();
});

userSchema.methods.getJsonWebToken = function(){
    const token = jwt.sign({id: this._id, role: this.name}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRESIN
    });
    return token;
};

userSchema.methods.checkPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}


export const User = mongoose.model("user", userSchema);