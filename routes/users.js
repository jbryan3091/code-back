const express = require('express');
const router = express.Router();

const { 
    getUsers,
    addUser,
    updateUserById,
    deleteUserById
} = require('../controllers/users');

router.route('/')
    .get(getUsers)
    .post(addUser);

//localhost:3000/users/
router.route('/:id')
    .put(updateUserById)
    .delete(deleteUserById);

module.exports = router;