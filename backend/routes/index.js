const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

/* ----------------- error handling -----------------
const { catchErrors } = require('../handlers/errorHandlers');
usage:
router.get('/', catchErrors(Controller.getData));
----------------- end of error handling ----------------- */

router.get('/getUsers', userController.getUsers);
router.post('/addUser/:name', userController.addUser);

module.exports = router;

