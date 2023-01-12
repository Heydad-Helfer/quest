const mongoose = require("mongoose");
const uri = '' + process.env.MONGO_URI + '/?ssl=true&replicaSet=atlas-4bjtiq-shard-0&authSource=admin&retryWrites=true&w=majority';


mongoose.connect(uri, { dbName: "Quest", useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

require("./question.model");