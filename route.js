const express = require('express');
const router =  express.Router();

const Resto = require('../models/resto')

router.get('/restolist',(req,res,next) =>{
    Resto.find(function(err,resto){
        res.json(resto);
    })
});

router.post('/restolist',(req,res,next) =>{
    let newResto = new Resto({
        restaurent_name : req.body.restaurent_name,
        city_name: req.body.city_name
    });

    newResto.save((err,resto) =>{
        if(err)
        {
            res.json({msg:'Failed to add Restaurent'});
        }
        else{
            res.json({msg:'Restaurent added Succesfully'});
        }
    });
});

router.delete('/restolist/:id',(req,res,next) =>{
    Resto.remove({id: req.params.id},function(err,result){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});

module.exports = router;