const express = require('express');
const bodyParser = require('body-parser');
const express = require("express");
const urouter = express.Router();

const { LoginUser, RegisterUser, ResetPassword, UpdatePassword } = require("../controllers/user")



urouter.get("/dashboard",);
urouter.post("/register", RegisterUser);
urouter.post("/login", LoginUser);
urouter.get('/booking/:id',);
urouter.get("/passwordreset", ResetPassword)
urouter.get("/logout",)
urouter.post("/passwordreset", ResetPassword)
urouter.post ("/updatepassord", UpdatePassword)


module.exports = urouter
