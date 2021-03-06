const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
// const {db} = require('mongodb');
const userSchema = mongoose.Schema({

    firstName :{
        type : String,
        required : true,
        trim : true,
        min : 3,
        max : 25
    },

    lastName :{
        type : String,
        required : true,
        trim : true,
        min : 3,
        max : 25
    },

    username :{
        type : String,
        required : true,
        trim : true,
        unique : true,
        index : true,
        lowercase : true
    },

    email:{
        type : String,
        required : true,
        trim : true,
        unique : true,
        lowercase : true
    },

    hash_password:{
        type : String,
        required : true,
    },
    role : {
        type : String,
        enum : ['user' , 'admin'],
        default : 'user'
    },

    location:{
        type:String,

    },
    contactNumber: {
         type: String 
        },
    pofilePicture:{
          type: String 
        },
  },
  { timestamps: true }
);

    // basket : {
    //     type : Array
    // }

userSchema.virtual('password')
.set(function(password){
this.hash_password = bcrypt.hashSync(password , 10)
});

userSchema.virtual('fullName')
.get(function(){
   return `${this.firstName} ${this.lastName}`;
})

userSchema.methods = {
    authenticate : function(password){
        return bcrypt.compareSync(password , this.hash_password )
    }
}

module.exports = mongoose.model('User', userSchema);
