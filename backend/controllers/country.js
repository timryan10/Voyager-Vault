import express from 'express';
import Country from '../models/countries.js';
import Wishlist from '../models/wishlist.js';

// Create a new router instance
const router = express.Router();

// Endpoint to add a country to the user's wishlist
router.post('/wishlist/add', async (req, res) => {
    const newWish = new Wishlist(req.body)
    try {

        const savedWish = await newWish.save()
        res.status(200).send(savedWish)
    } catch (error) {
        console.error('Error adding country:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

//fetch wishlist
router.get('/wishlist/add/:id', async (req, res) => {
    try {

        const wishlist = await Wishlist.find({ userId: req.params.id })
        res.status(200).json(wishlist);
    } catch (error) {
        console.error('Error getting all user wishlist:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Endpoint to add a country to the user's destinations
router.post('/destination/add', async (req, res) => {
    const newCountry = new Country(req.body)
    try {
        const savedCountry = await newCountry.save()
        res.status(200).send(savedCountry)
    } catch (error) {
        console.error('Error adding country:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

//fetch destination
router.get('/destination/add/:id', async (req, res) => {
    try {
        const country = await Country.find({ userId: req.params.id })
        res.status(200).json(country);
    } catch (error) {
        console.error('Error getting all user destination:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

export default router;