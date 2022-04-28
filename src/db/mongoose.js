const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
});

// BASIC EXAMPLE

// const User = mongoose.model("User", {
//   name: { 
//     type: String, 
//     required: true, 
//     default:'Guest'
//    },
//    password:{
//      type:String,
//      required:true,
//      minlength: 7,
//      validate(value){
//       if(value.toLowerCase().includes('password')){
//         throw new Error('Password can not contain "password"')
//       }
//      }     
//    },
//   email: {
//     type: String,
//     required: true,
//     validate(value) {
//       if (!validator.isEmail(value)) {
//         throw new Error("Please provide the valid email adress");
//       }
//     },
//   },
//   age: {
//     type: Number,
//     validate(value) {
//       if (value < 0) {
//         throw new Error("Age must be a positive number");
//       }
//     },
//   },
// });

// const me = new User({
//   age: 2,
//   email: "kaneatwood@gmail.com",
//   password: 'Kane@123'
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

                              //           \\
                             //    TASKS    \\
//                           \\             //
//                            \\___________//
//                             \\_________//

// const Task = mongoose.model("Task", {
//   description: {
//     type: String,
//     required:true,
//     trim:true
//   },
//   Completed: {
//     type: Boolean,
//     default: false
//   },
// });

// const task = new Task({
//   description: 'Clean the House',
// })

// task.save().then(()=>{
//   console.log(task)
// }).catch((e)=>{
//   console.log(e)
// })