const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/relationshipsDemo')
    .then( () => {
        console.log("Mongo Connection Open!");
    })
    .catch( err => {
        console.log('something went wrong');
        console.log(err);
    });

const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    addresses: [
        {
            _id: {id:false},
            street: String,
            city: String,
            state: String,
            country: String
        }
    ]
});

const User = mongoose.model('User', userSchema);


const makeUser = async () => {
    const user = new User({
    first: 'Harry',
    last: 'Potter',
    });
    user.addresses.push (
        {
            street: '144 N. Rogersterling',
            city: 'New York',
            state: 'Indianapolis',
            country: 'USA'
        }
    );
    const res = await user.save();
    console.log(res);
};

const addAddress = async(id) => {
    const user = await User.findById(id);
    user.addresses.push(
        {
            street: '992 8th St.',
            city: 'New York',
            state: 'Maryland',
            country: 'USA'
        }
    )
    const res = await user.save();
    console.log(res)
};

const harry = makeUser();
addAddress('61f866d4e4fd633d528e072d');
console.log(harry);