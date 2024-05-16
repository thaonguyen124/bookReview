const express=require('express');
var router=express.Router()

router.get('/',(req, res) => {
    res.json('router 1')
})

router.get('/cart',(req,res) => {
    res.json('router cart')
})

router.get('/product',(req,res) => {
    res.json('router product')
})

module.exports=router