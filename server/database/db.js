import mongoose from "mongoose";

const Connection = async (username, password) =>{
   const URL = `mongodb://${username}:${password}@ac-i3ebbmb-shard-00-00.dwl4cxs.mongodb.net:27017,ac-i3ebbmb-shard-00-01.dwl4cxs.mongodb.net:27017,ac-i3ebbmb-shard-00-02.dwl4cxs.mongodb.net:27017/CRUD-APP?ssl=true&replicaSet=atlas-acndqw-shard-0&authSource=admin&retryWrites=true&w=majority`
   
    try {
        await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
        console.log('database connected succesfully');
    } catch(error) {
        console.log(`error while Connection with database`, error);
    }
    
}

export default Connection;