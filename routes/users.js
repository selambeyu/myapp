var express = require('express');
var router = express.Router();
var verifyToken=require('../midelware/verifytoken');
var UserController=require('../controller/user')

/* GET users listing. */
router.get('/', UserController.getUser);
router.get('/get',UserController.getpaginate);
router.post('/register',UserController.register);
router.put('/update/:id',UserController.updateUser);
router.delete('/delete/:id',UserController.deleteUser);

module.exports = router;
