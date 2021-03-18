const MongoClient = require('mongodb').MongoClient;

module.exports = async function (context, req) {

   const URL = "mongodb://cosmos-db-fsereno:cK7M8N98HicntPkPwT7RJg1KLFTfyBzKfUISZ7jVFR0yBc678hvKRYTlMv4bn8HFR8KjvRkHt5YJbiv13tdN4Q%3D%3D@cosmos-db-fsereno.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@cosmos-db-fsereno@";
   const DATABASE_NAME = "cosmos-db-fsereno";
   const COLLECTION_NAME = "todos";

   const connection = await MongoClient.connect(URL);
   const todoCollection = connection.db(DATABASE_NAME).collection(COLLECTION_NAME);

   const result = await todoCollection.find({}).toArray();

    return {
        body: JSON.stringify(result)
    }
}