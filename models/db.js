const mongoose = require("mongoose");
const uri = 'mongodb://admin:Aa123456@quest.zneo4ye.mongodb.net/Quest?retryWrites=true&w=majority';


mongoose.connect(uri, {useNewUrlParser: true}, err => {  
    if (!err) {  
        console.log("Connection succeeded");
    } else {  
        console.log("Error in connection: " + err);
    }
});
  
require("./question.model");