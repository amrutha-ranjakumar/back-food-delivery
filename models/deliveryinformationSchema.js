// import mongoose
const mongoose = require('mongoose')


const deliveryinformationSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        require: true
    },
    LastName: {
        type: String,
        require: true

    },
    Email: {
        type: String,
        require: true
    },
    Street: {
        type: String,
        require: true
    },
    City: {
        type: String,
        require: true
    },
    State : {
        type: String,
        require: true
    },
    ZipCode : {
        type: String,
        require: true
    },
    Country: {
        type: String,
        require: true
    },
    Phone : {
        type: String,
        require: true
    },
    userId: {
        type: String,
        require: true
    }
})


const deliveryinformations = mongoose.model("deliveryinformations", deliveryinformationSchema)

module.exports = deliveryinformations ;