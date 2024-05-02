const { Router } = require('express');
const { userAuthService } = require('../services/userService.js');

const router = Router();

router.get('/login', async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = userAuthService.getUser({ email, password });

        if (user.errorMessage) {
            throw new Error(user.errorMessage);
        }

        res.status(200).send(user);
    } catch (e) {
        next(e);
    }
});

module.exports = router;