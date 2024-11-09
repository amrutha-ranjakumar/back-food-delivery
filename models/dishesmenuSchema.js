// import mongoose
const mongoose = require('mongoose')


const dishesmenuSchema = new mongoose.Schema({
    menuimage: {
        type: String,
        require: true
    },
    menu: {
        type: String,
        require: true

    },
    dishname: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    },
    dishesImage: {
        type: String,
        require: true
    },
    userId: {
        type: String,
        require: true
    }
})


const dishesmenus = mongoose.model("dishesmenus", dishesmenuSchema)

module.exports = dishesmenus;