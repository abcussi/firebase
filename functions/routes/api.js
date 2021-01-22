const express = require("express");
const Router = express.Router();
const bodyparser = require("body-parser");
const jsonParser = bodyparser.json();
const db_firestore = require("../controllers/db_firestore");

Router.get("/products",(req,res)=>{
    res.json([{id:0,name:"product 1"}]);
});

Router.post("/products", jsonParser,async (req,res)=>{
    console.log(req.body);
    const respones = db_firestore.create(req.body);
    res.status(200).json({response: respones});
});

module.exports = Router;