const express = require('express');
const router = express.Router();
const { getSuppliers, addSupplier } = require('../controllers/supplierController');

// Supplier routes
router.get('/', getSuppliers);
router.post('/', addSupplier);

module.exports = router;
