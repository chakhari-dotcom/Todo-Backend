const mongoose= require("mongoose");
// MONGODB_URL='mongodb://localhost:27017/todo';
// const dbURL = process.env.MONGODB_URL;

mongoose.connect('mongodb+srv://chakharifatma77:xe90L7eeyEQX6Mxt@cluster0.mongodb.net/myDatabase?retryWrites=true&w=majority')
   .then(
    ()=>{
        console.log("connected")
    }
   )
   .catch(
    (error)=>{
        console.error("error connecting",error)
    }
   )

//    mongoose.connect(dbURL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((error) => {  // Proper error handling
//     console.error('Error connecting to MongoDB:', error);
//   });
// mongodb://127.0.0.1:27017/todo
 
  