
const express = require("express");
const route = express.Router();
const {getAllProperty,
     getOneProperty, 
     createProperty, 
     update, 
     deleteItem, 
     menuPrincipal,
     saveProperty
    } = require("../controllers/property");

route.get("/menu", menuPrincipal)
route.delete("/delete/:value", deleteItem);
route.get("/getOne/:value", getOneProperty);
route.get("/getAllProperty", getAllProperty);
route.get("/createProperty", createProperty);
route.post('/createproperty', saveProperty);
route.put("/update/:value", update);
module.exports = route;