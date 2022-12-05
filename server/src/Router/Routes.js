const { Router } = require('express');
const LoginController = require('../Pages/Controllers/LoginController');
const TransactionsController = require('../Pages/Controllers/TransactionsController')
const { eAdmin } = require('../Middlewares/Authorization');

const router = Router();


router.get('/', LoginController.index);
router.delete('/', LoginController.delete);
router.post('/login', LoginController.show);

router.post('/cadastro', LoginController.store);

router.get('/usuario', eAdmin, TransactionsController.index)

router.post('/transferencia', eAdmin, TransactionsController.store)

module.exports = router;
