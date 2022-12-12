const mongoose = require("mongoose")
const connect = () => {
    //return mongoose.connect("mongodb+srv://Mock-server:Mock-server@cluster0.an24sqd.mongodb.net/shubham?retryWrites=true&w=majority")
    return mongoose.connect("mongodb+srv://sunil:sunil@cluster0.g6orjd8.mongodb.net/sunil?retryWrites=true&w=majority")

    
}
module.exports = connect