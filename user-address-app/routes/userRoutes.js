const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Address = require('../models/Address');

// Route to handle form submission
router.post('/submit', async (req, res) => {
    try {
        const { name, street, city, state, zipCode } = req.body;

        // Create User
        const user = await User.create({ name });

        // Create Address and associate it with the User
        const address = await Address.create({
            street,
            city,
            state,
            zipCode,
            UserId: user.id // Associate address with user
        });

        res.status(201).json({
            message: 'User and address created successfully',
            user,
            address,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
