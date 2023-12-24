const Router = require("express")
const controller = require("../controlllers/authController")
const {check} = require('express-validator')
const authMiddleware = require('../middlewares/authMiddleware')
const roleMiddleware = require('../middlewares/roleMiddleware')

const router = new Router()

router.post('/registration', [
    check('username', 'Имя пользователя должно быть больше 4 символов').isLength({min: 4}),
    check('password', 'Пароль должен быть больше 4 и меньше 10 символов').isLength({min: 4, max: 10})
], controller.registration)
router.post('/login', controller.login)
router.get('/users', roleMiddleware(['ADMIN']), controller.getUsers)

module.exports = router