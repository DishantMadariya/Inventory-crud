const Inventory = require('../models/inventoryModel');

// Get all inventory items
const getInventory = async (req, res) => {
    try {
        const inventory = await Inventory.find().populate('supplier');
        res.json(inventory);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// Add new inventory item
const addInventory = async (req, res) => {
    const { name, quantity, supplier } = req.body;
    try {
        const newItem = new Inventory({ name, quantity, supplier });
        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        res.status(400).json({ message: 'Failed to add item' });
    }
};

// Update inventory item
const updateInventory = async (req, res) => {
    const { id } = req.params;
    const { name, quantity, supplier } = req.body;
    try {
        const updatedItem = await Inventory.findByIdAndUpdate(id, { name, quantity, supplier }, { new: true });
        res.json(updatedItem);
    } catch (error) {
        res.status(400).json({ message: 'Failed to update item' });
    }
};

// Delete inventory item
const deleteInventory = async (req, res) => {
    const { id } = req.params;
    try {
        await Inventory.findByIdAndDelete(id);
        res.json({ message: 'Item deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: 'Failed to delete item' });
    }
};

module.exports = {
    getInventory,
    addInventory,
    updateInventory,
    deleteInventory
};
 