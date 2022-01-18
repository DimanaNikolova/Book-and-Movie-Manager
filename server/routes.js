const express = require('express');
const router = express.Router();

const userController = require('./controllers/userController');
const itemController = require('./controllers/itemController')

router.get('/', async (req, res) => {
    res.status(200).json({ message: `It's working!` });
});

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.use('/auth', userController);
router.use('/items', itemController)


module.exports = router;
