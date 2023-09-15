import Tweets from '../models/Tweets.js';
import Tweet from '../models/Tweets.js';
import User from '../models/User.js';



export const createTweet = async (req, res , next) => {
    const newTweet = new Tweet(req.body);
    try {
        //const savedTweet = await Tweet(req.body);
        const savedTweet = await newTweet.save();
        res.status(200).json(savedTweet);
    }
    catch (error) {
        res.status(500).json(error);
    }

};



export const deleteTweet = async (req, res , next) => {
    try {
        const toDeletetweet = await Tweet.findById(req.params.id);
        if (toDeletetweet.userId === req.body.id) {
            await toDeletetweet.deleteOne();
        res.status(200).json('deleted');
        }
        else {
            handleError(500 , err);
        }
    }
    catch (error) {
        res.status(500).json(error);
    }
}; 



export const likeOrDislke = async (req, res, next) => {

    try {
        const tweet = await Tweet.findById(req.params.id);
        if (!tweet.likes.includes(req.body.id)) {
            await tweet.updateOne( {$push:{ likes : req.body.id}});
            res.status(200).json('liked');
        }
        else{
            await tweet.updateOne( {$pull:{ likes : req.body.id}});
            res.status(200).json('disliked');
        }
    }
        catch (err) {
            handleError(500, err);
        }

};



export const getAllTweets = async (req, res, next) => {
    try {
        const currentUser = await User.findById(req.params.id) ;
        const userTweets = await Tweets.find({userId  : currentUser._id})
        const followersTweets = await Promise.all(
            currentUser.following.map((followerId ) => {
                return Tweets.find({userId : followerId});
            })
        );
        res.status(200).json(userTweets.concat( ... followersTweets));
    }
        catch (err) {
            handleError(500, err);
        }

};


export const getUserTweets = async (req, res, next) => {
    try {
        //const currentUser = await User.findById(req.params.id) ;
        const userTweets = await Tweets.find({userId  : req.params.id}).sort({
            createAt : -1   
        }) ;
        //const followersTweets = await Promise.all(
        //    currentUser.following.map((followerId ) => {
        //        return Tweets.find({userId : followerId});
        //    })
        res.status(200).json(userTweets);
    }
        catch (err) {
            handleError(500, err);
        }
};


export const getExploreTweets = async (req, res, next) => {
    try {
        //const currentUser = await User.findById(req.params.id) ;
        const getExploreTweets = await Tweets.find({likes : { $exists : true} }).sort({
            likes : -1   
        }) ;
        //const followersTweets = await Promise.all(
        //    currentUser.following.map((followerId ) => {
        //        return Tweets.find({userId : followerId});
        //    })
        res.status(200).json(getExploreTweets) 
    } 
        catch (err) {
            handleError(500, err);
        }
};
