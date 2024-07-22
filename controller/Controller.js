// controllers/kitchenItemController.js
const KitchenItem = require('../models/KitchenItem');

exports.getAllKitchenItems = async (req, res) => {
    try {
        const kitchenItems = await KitchenItem.find();
        res.json(kitchenItems);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.createKitchenItem = async (req, res) => {
    try {
        const { name, quantity, date } = req.body;
        const newKitchenItem = new KitchenItem({ name, quantity, date });
        await newKitchenItem.save();
        res.status(201).json(newKitchenItem);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

