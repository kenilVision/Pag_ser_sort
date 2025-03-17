const mongoose = require('mongoose')
const url = process.env.DBurl

const Connect =  async() => {
    await mongoose.connect(url)
        .then(()=>{
            console.log("connected to mongoDB")
        })
        .catch((err)=>{
            console.log("can't connect to mongoDB" + "--->" + err)
        })
}



module.exports = Connect