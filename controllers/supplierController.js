const Supplier = require('../models/supplierModel');

// Get all suppliers
const getSuppliers = async (req, res) => {
    try {
        const suppliers = await Supplier.find();
        res.json(suppliers);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// Add new supplier
const addSupplier = async (req, res) => {
    const { name, contactInfo } = req.body;
    try {
        const newSupplier = new Supplier({ name, contactInfo });
        await newSupplier.save();
        res.status(201).json(newSupplier);
    } catch (error) {
        res.status(400).json({ message: 'Failed to add supplier' });
    }
};

module.exports = {
    getSuppliers,
    addSupplier
};
