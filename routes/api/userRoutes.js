const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    login,
    /* createTodo,
    updateTodo,
    deleteTodo, */
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

/* router.route('/:userId/todo').post(createTodo).put(updateTodo).delete(deleteTodo); */

router.route('/login').post(login);

module.exports = router;