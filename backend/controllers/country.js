// Import necessary modules
import express from 'express';
import User from '../models/user.js';
import Country from '../models/countries.js';

// Create a new router instance
const router = express.Router();
 
// Endpoint to add a country to the user's wishlist
router.post('/wishlist/add', async (req, res) => {
    const newCountry = new Country(req.body)
    try {
        
    const savedCountry = await newCountry.save()
        res.status(200).send(savedCountry)
        
        // Find the user by userId and update the wishlist array
       
       

        // Send a response with the updated user data
     
    } catch (error) {
        console.error('Error adding country:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

//fetch wishlist
router.get('/wishlist/add/:id', async (req, res) => {
    console.log("reached")
    try {
        
    const country = await Country.find({userId:req.params.id})
        res.status(200).json(country);
    } catch (error) {
        console.error('Error getting all user wishlist:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Endpoint to add a country to the user's destinations
router.post('/destinations/add', async (req, res) => {
    try {
        const { userId, countryId } = req.body;

        // Find the user by userId and update the destinations array
        const user = await User.findByIdAndUpdate(userId, { $addToSet: { destinations: countryId } }, { new: true });

        // Send a response with the updated user data
        res.json(user);
    } catch (error) {
        console.error('Error adding country to destinations:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Export the router
export default router;
