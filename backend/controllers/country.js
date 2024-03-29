// Import necessary modules
import express from 'express';
import User from '../models/user.js';

// Create a new router instance
const router = express.Router();

// Endpoint to add a country to the user's wishlist
router.post('/wishlist/add', async (req, res) => {
    try {
        const { userId, country } = req.body;

        // Find the user by userId and update the wishlist array
        const user = await User.findByIdAndUpdate(userId, { $addToSet: { wishlist: country.name } }, { new: true });
            console.log(user)
        // Send a response with the updated user data
        res.json(user);
    } catch (error) {
        console.error('Error adding country to wishlist:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Endpoint to add a country to the user's destinations
router.post('/destinations/add', async (req, res) => {
    try {
        const { userId, country } = req.body;

        // Find the user by userId and update the destinations array
        const user = await User.findByIdAndUpdate(userId, { $addToSet: { destinations: country } }, { new: true });

        // Send a response with the updated user data
        res.json(user);
    } catch (error) {
        console.error('Error adding country to destinations:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Export the router
export default router;
