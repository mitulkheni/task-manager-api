const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT;

//BLOCK THE GET REQUEST
// app.use((req,res,next)=>{
//   if(req.method ==="GET"){
//     res.send('Get requests are disabled')
//   }else{
//     next()
//   }
// })

// app.use((req,res,next)=>{
//   res.status(503).send('This site is under maintenance')
// })

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port,()=>{
    console.log('server is up on port '+ port)
});

// HASHING PASSWORD USING BCRYPT ===> BASIC EXAMPLE

// const bcrypt = require('bcryptjs')
// const myFunction = async ()=>{
//   const password = 'Red@12345!'
//   const hashedPassword = await bcrypt.hash(password, 8)

//   console.log(password)
//   console.log(hashedPassword)

//                    // UNHASHING THE PASSWORD

//   const isMatch = await bcrypt.compare('Red@12345!', hashedPassword)
//   console.log(isMatch)
// }
// myFunction()

// JSON WEB TOKEN

// const jwt = require('jsonwebtoken')

// const myFunction = async()=>{
//   const token = jwt.sign({ _id: 'abc123' },'thisismynewcourse',{ expiresIn: '7 days' })
//   console.log(token)

//   const data = jwt.verify(token,'thisismynewcourse')
//   console.log(data)
// }
// myFunction()

const Task = require("./models/task");
const User = require("./models/user");

// const main = async()=>{
// const task = await Task.findById('6268c1cf25b8f441ff1fd956')
// await task.populate('owner')
// console.log(task.owner)

// const user = await User.findById('6268d1b2f015bcc49a43d640')
// await user.populate('tasks')
// console.log(user.tasks)

// }
// main()


                            // UPLOADING THE FILE (CODE EXAMPLE)
// const upload = multer({
//   dest: "images",
//   limits: {
//     fileSize: 1000000,
//   },
//   fileFilter(req, file, cb) {
//     if (!file.originalname.match(/\.(doc|docx)$/)) {
//       return cb(new Error("Please upload a word document file"));
//     }

//     cb(undefined, true);
//   },
// });

// app.post("/upload",upload.single("upload"), (req, res) => {
//     res.send();
//   },(error, req, res, next) => {
//     res.status(400).send({
//       error: error.message,
//     });
//   }
// );
