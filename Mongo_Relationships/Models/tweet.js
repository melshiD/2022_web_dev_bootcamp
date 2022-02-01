const mongoose = require('mongoose');
const {Schema} = mongoose;

mongoose.connect('mongodb://localhost:27017/relationshipsDemo')
    .then( () => {
        console.log("Mongo Connection Open!");
    })
    .catch( err => {
        console.log('something went wrong');
        console.log(err);
    });

const userSchema = new Schema({
    username: String,
    age: Number
});

const tweetSchema = new Schema({
    tweet: String,
    likes: Number,
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});

const User = mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);

const makeTweets = async () => {
    // const user = new User({username: 'chickenman99', age: 99});
    const user = await User.findOne({username: 'chickenman99'});
    const tweet2 = new Tweet({tweet: 'HA! Squacked ya!', likes: 1243321});
    tweet2.user = user;
    await user.save();
    await tweet2.save();
};

makeTweets();

const findTweet = async () => {
    const T = await Tweet.findOne({}).populate('user', 'username');
    console.log(T);
}

findTweet();