const express = require("express")
const { getData, putData, setPassword, setUsername } = require("../controller/editor.js")

const router = express.Router()

router.get("/", getData)
router.put("/", putData);
router.put("/password",setPassword);
router.put("/setUsername", setUsername);
module.exports=router