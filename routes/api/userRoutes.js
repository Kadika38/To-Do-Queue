const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    login,
    createTodo,
    deleteTodo,
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

router.route('/:userId/todo').post(createTodo);

router.route('/:userId/todo/:todoId').delete(deleteTodo);

router.route('/login').post(login);

module.exports = router;