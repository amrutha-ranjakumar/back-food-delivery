// import mongoose
const mongoose = require('mongoose')


const menuSchema = new mongoose.Schema({
    menuimage: {
        type: String,
        require: true
    },
    menu: {
        type: String,
        require: true

    },
    
    userId: {
        type: String,
        require: true
    }
})


const menus = mongoose.model("menus", menuSchema)

module.exports = menus;