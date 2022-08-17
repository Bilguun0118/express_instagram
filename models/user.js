import mongoose from "mongoose";

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

export const User = mongoose.model("user", userSchema);