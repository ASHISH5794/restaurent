const mongoose = require('mongoose');

const RestoSchema = mongoose.Schema({
    restaurent_name :{
        type: String,
        required: true
    },
    city_name:{
        type : String,
        required : true
    }
});

const Resto = module.exports = mongoose.model('Resto',RestoSchema);