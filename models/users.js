
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    userName: {
        type: String
    },
    password: {
        type: String
    },
    userType: {
        kind: {
            type: String,
            enum: ['admin', 'client']
        },
        item: {
            type: mongoose.Types.ObjectId,
            refPath: 'userType.kind'
        }

    }
},
    { collection: 'users' });


module.export = mongoose.model('users',userSchema);

