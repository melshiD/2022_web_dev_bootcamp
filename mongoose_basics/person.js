const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp')
                //mongo will make the collection 'shopApp' if it doesn't already exist
    .then(() => {
        console.log("connection open");
    })
    .catch(err => {
        console.log('Failed to establish connection with DB');
        console.log(err);
    });

const personSchema = new mongoose.Schema({
    first: String,
    last: String
});

personSchema.virtual('fullName').get( function(){
    return `${this.first} ${this.last}`;
});

personSchema.pre('save', async function() {
    console.log("about to save~");
    this.first = "Awesome";

});
personSchema.post('save', async function(){
    console.log('JUST SAVED');
})

const Person = mongoose.model('Person', personSchema);

const dave = new Person({
    first: 'Dave',
    last: 'Melsheimer'
});
console.log(dave.fullName);


dave.save();

console.log(dave.fullName);

// let printout = dave.get();
// console.log(printout);

