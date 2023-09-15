import { handleError } from "../error.js";
import User from "../models/User.js";
import Tweet from "../models/Tweets.js";

export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
};


export const updateUser = async (req, res) => {
        if (req.params.id === req.user.id) {
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set : req.body}, { new: true });
            res.status(200).json(updatedUser);
        } catch (err) {
            next(err);
        }
        }
        else{
            return next(handleError(403, "can only update yourself"));
        }
};



export const deleteUser = async (req, res,next) => {
    if (req.params.id === req.user.id) {
        try {
            const deletedUser = await User.findByIdAndDelete(req.params.id);
            await Tweet.remove({userId : req.params.id});
            res.status(200).json(deletedUser);
        } catch (err) {
            next(err);
        }
    }
    else{
        return next(handleError(403, "can only delete yourself"));
    }
};


export const follow = async (req, res) => {
    try {
        // get user from id in url params
        const user = await User.findById(req.params.id);

        // current user 
        const currentUser = await User.findById(req.user.id);

        // check if user is already following
        // harry is logged in and already in rons followers list
        if (!user.followers.includes(currentUser.id)) {
            await user.updateOne({ $push : {followers : req.body.id} });
            await currentUser.updateOne({ $push : {following : req.params.id} });
        }
        else{
            res.status(403).json("you already following this user");
        }
        res.status(200).json("following the user");
    }
    catch (err) {
        handleError(err);
    }

};

export const unfollow = async (req, res) => {
    try {
        // get user from id in url params
        const user = await User.findById(req.params.id);

        // current user 
        const currentUser = await User.findById(req.body.id);

        // check if user is already following
        // harry is logged in and already in rons followers list
        if (currentUser.following.includes(user.id)) {
            await user.updateOne({ $pull : {followers : req.body.id} });
            await currentUser.updateOne({ $pull : {following : req.params.id} });
        }
        else{
            res.status(403).json("you are not following this user");
        }
        res.status(200).json("unfollowed the user");
    }
    catch (err) {
        next(err);
    }

};


