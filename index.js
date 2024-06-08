const express = require('express');
const request = require('request-promise');

const app = express();
const PORT = process.env.PORT || 5000;

const generateScraperURL = (apiKey) => `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to AmazonScout');
});

app.get('/products', (req, res) => {
    res.send('Main URL for Products, add an Amazon product ID after it: e.g., /products/{productID}');
});

// Get product details from Amazon
app.get('/products/:productID', async (req, res) => {
    const { productID } = req.params;
    const { api_key } = req.query;

    if (!api_key) {
        return res.status(400).json({ error: 'API key is required' });
    }

    try {
        const response = await request(`${generateScraperURL(api_key)}&url=https://www.amazon.com/dp/${productID}`);
        res.json(JSON.parse(response));
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch product information' });
    }
});

// Get product reviews from Amazon
app.get('/products/:productID/reviews', async (req, res) => {
    const { productID } = req.params;
    const { api_key } = req.query;

    if (!api_key) {
        return res.status(400).json({ error: 'API key is required' });
    }

    try {
        const response = await request(`${generateScraperURL(api_key)}&url=https://www.amazon.com/product-reviews/${productID}`);
        res.json(JSON.parse(response));
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch product reviews' });
    }
});

// Get product offers from Amazon
app.get('/products/:productID/offers', async (req, res) => {
    const { productID } = req.params;
    const { api_key } = req.query;

    if (!api_key) {
        return res.status(400).json({ error: 'API key is required' });
    }

    try {
        const response = await request(`${generateScraperURL(api_key)}&url=https://www.amazon.com/gp/offer-listing/${productID}`);
        res.json(JSON.parse(response));
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch product offers' });
    }
});

// Get search results from Amazon
app.get('/search/:searchQuery', async (req, res) => {
    const { searchQuery } = req.params;
    const { api_key } = req.query;

    if (!api_key) {
        return res.status(400).json({ error: 'API key is required' });
    }

    try {
        const response = await request(`${generateScraperURL(api_key)}&url=https://www.amazon.com/s?k=${searchQuery}`);
        res.json(JSON.parse(response));
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch search results' });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
