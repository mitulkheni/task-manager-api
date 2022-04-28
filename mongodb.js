// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID, Db } = require("mongodb");
const { collection } = require("./src/models/user");

const connectURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(connectURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log("Unable to connect to database");
  }

  const db = client.db(databaseName);

  // <-- INSERT SINGLE USER -->
  // db.collection("users").insertOne(
  //   {
  //     name: "John",
  //     age: 30,
  //   },
  //   (error, result) => {
  //     if (error) {
  //       console.log("Unable to insert document");
  //     }
  //     console.log(result.ops);
  //   }
  // );

  // <-- INSERT MULTIPLE USERS -->
  // db.collection("users").insertMany([
  //   {
  //     name: "Jessica",
  //     age: 24,
  //   },
  //   {
  //     name: "Gunther",
  //     age: 27
  //   }],(error, result) => {
  //     if (error) {
  //       console.log("Unable to insert documents");
  //     }
  //     console.log(result.ops);
  //   });

  // <-- READ THE DATA FROM DATABASE -->
  // db.collection("users").findOne({ name: "Jessica" }, (error, user) => {
  //   if(error){
  //     console.log('Unable to fetch user')
  //   }
  //   console.log(user)
  // });

  // <-- READ THE DATA FROM DATABASE -->
  // db.collection('users').find({ age:27 }).toArray((error,users) => {
  //   if(error){
  //     console.log('Unable to find users')
  //   }
  //   console.log(users)
  // })

  // <-- UPDATE THE SINGLE USER -->
  // db.collection("users").updateOne(
  //   { name: "Jessica" },
  //   {
  //     $set: { name: "Jen" },
  //   }).then((reuslt) => {
  //     console.log(reuslt);
  //   }).catch((error) => {
  //     console.log(error);
  //   });

  // <-- DELETE THE SINGLE USER -->
  // db.collection("users").deleteOne({
  //     name: "John",
  //   }).then((result) => {
  //     console.log(result);
  //   }).catch(() => {
  //     console.log(error);
  //   });

                              //           \\
                             //    TASKS    \\
//                           \\             //
//                            \\___________//
//                             \\_________//


  // <-- INSERT MULTIPLE TASKS -->
  //   db.collection("tasks").insertMany([
  //     {
  //       description: "Complete node js",
  //       Completed: false,
  //     },
  //     {
  //       description: "Plant the trees",
  //       Completed: true,
  //     },
  //     {
  //       description: "Attend a meeting",
  //       Completed: true,
  //     },
  //   ]);
  // },
  // (error, result) => {
  //   if (error) {
  //     console.log("Unable to insert tasks");
  //   }
  //   console.log(result.ops);
  // }

  // <-- READ THE MULTIPLE DATA FROM DATABASE -->
  // db.collection("tasks")
  //   .find({ Completed: true })
  //   .toArray((error, tasks) => {
  //     if (error) {
  //       console.log("Unable to fetch users");
  //     }
  //     console.log(tasks);
  //   });

  // <-- UPDATE THE MULTIPLE TASKS -->
  // db.collection("tasks")
  //   .updateMany(
  //     { Completed: false },
  //     {$set: { Completed: true },
  //     }).then((result) => {
  //     console.log(result);
  //   }).catch((error) => {
  //     console.log(error);
  //   });

  // <-- DELETE THE SINGLE TASK -->
  // db.collection("tasks").deleteOne({
  //     description: "Complete node js",
  //   }).then((result) => {
  //     console.log(result);
  //   }).catch(() => {
  //     console.log(error);
  //   });
});
