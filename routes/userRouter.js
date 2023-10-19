const router = require('express').Router();

const User = require('../controller/userController');

const upload = require('../middlewares/uploader');
const autentikasi = require('../middlewares/authenticate');
const checkRole = require('../middlewares/checkRole');

// router.post('/', upload.single('image'), User.createProduct);
router.get('/', autentikasi, checkRole('Owner'), User.findUsers);
router.get('/:id', User.findUserById);
router.patch('/:id', User.updateUser);
router.delete('/:id', User.deleteUser);

module.exports = router;
