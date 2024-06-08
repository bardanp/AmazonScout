const express = require('express');
const request = require('request-promise');
const cheerio = require('cheerio');

const app = express();
const PORT = process.env.PORT || 5000;

const generateScraperURL = (apiKey) => `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;

app.use(express.json());

app.get('/', (req, res) => {
    res.send(`
        <h1>Welcome to AmazonScout</h1>
        <p>AmazonScout is a Node.js application that allows users to fetch product details, reviews, offers, and search results from Amazon using the ScraperAPI.</p>
        <h2>Endpoints</h2>
        <ul>
            <li><strong>GET /products</strong> - Returns instructions for using the /products endpoint.</li>
            <li><strong>GET /products/:productID</strong> - Fetch product details from Amazon. Requires <code>api_key</code> query parameter.</li>
            <li><strong>GET /products/:productID/reviews</strong> - Fetch product reviews from Amazon. Requires <code>api_key</code> query parameter.</li>
            <li><strong>GET /products/:productID/offers</strong> - Fetch product offers from Amazon. Requires <code>api_key</code> query parameter.</li>
            <li><strong>GET /products/:productID/categories</strong> - Fetch product categories from Amazon. Requires <code>api_key</code> query parameter.</li>
            <li><strong>GET /products/:productID/similar</strong> - Fetch similar products from Amazon. Requires <code>api_key</code> query parameter.</li>
            <li><strong>GET /products/:productID/images</strong> - Fetch product images from Amazon. Requires <code>api_key</code> query parameter.</li>
            <li><strong>GET /search/:searchQuery</strong> - Perform a search on Amazon and retrieve search results. Requires <code>api_key</code> query parameter.</li>
            <li><strong>GET /bestsellers/:category</strong> - Fetch best-selling products in a given category. Requires <code>api_key</code> query parameter.</li>
        </ul>
        <p>Use the above endpoints with your ScraperAPI key to fetch data from Amazon.</p>
    `);
});

app.get('/products', (req, res) => {
    res.send(`
        <h1>Products Endpoint</h1>
        <p>Main URL for Products, add an Amazon product ID after it: e.g., /products/{productID}</p>
        <p>Examples:</p>
        <ul>
            <li><strong>Product Details:</strong> /products/{productID}?api_key=YOUR_SCRAPER_API_KEY</li>
            <li><strong>Product Reviews:</strong> /products/{productID}/reviews?api_key=YOUR_SCRAPER_API_KEY</li>
            <li><strong>Product Offers:</strong> /products/{productID}/offers?api_key=YOUR_SCRAPER_API_KEY</li>
            <li><strong>Product Categories:</strong> /products/{productID}/categories?api_key=YOUR_SCRAPER_API_KEY</li>
            <li><strong>Similar Products:</strong> /products/{productID}/similar?api_key=YOUR_SCRAPER_API_KEY</li>
            <li><strong>Product Images:</strong> /products/{productID}/images?api_key=YOUR_SCRAPER_API_KEY</li>
        </ul>
    `);
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

// Get product categories from Amazon
app.get('/products/:productID/categories', async (req, res) => {
    const { productID } = req.params;
    const { api_key } = req.query;

    if (!api_key) {
        return res.status(400).json({ error: 'API key is required' });
    }

    try {
        const response = await request(`${generateScraperURL(api_key)}&url=https://www.amazon.com/dp/${productID}`);
        const categories = extractCategoriesFromResponse(response);
        res.json(categories);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch product categories' });
    }
});

// Get similar products from Amazon
app.get('/products/:productID/similar', async (req, res) => {
    const { productID } = req.params;
    const { api_key } = req.query;

    if (!api_key) {
        return res.status(400).json({ error: 'API key is required' });
    }

    try {
        const response = await request(`${generateScraperURL(api_key)}&url=https://www.amazon.com/dp/${productID}`);
        const similarProducts = extractSimilarProductsFromResponse(response);
        res.json(similarProducts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch similar products' });
    }
});

// Get product images from Amazon
app.get('/products/:productID/images', async (req, res) => {
    const { productID } = req.params;
    const { api_key } = req.query;

    if (!api_key) {
        return res.status(400).json({ error: 'API key is required' });
    }

    try {
        const response = await request(`${generateScraperURL(api_key)}&url=https://www.amazon.com/dp/${productID}`);
        const images = extractImagesFromResponse(response);
        res.json(images);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch product images' });
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

// Get best-selling products from Amazon by category
app.get('/bestsellers/:category', async (req, res) => {
    const { category } = req.params;
    const { api_key } = req.query;

    if (!api_key) {
        return res.status(400).json({ error: 'API key is required' });
    }

    try {
        const response = await request(`${generateScraperURL(api_key)}&url=https://www.amazon.com/Best-Sellers-${category}/zgbs`);
        res.json(JSON.parse(response));
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch best-selling products' });
    }
});

// Helper functions to extract data from the response
const extractCategoriesFromResponse = (response) => {
    const $ = cheerio.load(response);
    const categories = [];
    $('#wayfinding-breadcrumbs_container ul li a').each((i, elem) => {
        categories.push($(elem).text().trim());
    });
    return categories;
};

const extractSimilarProductsFromResponse = (response) => {
    const $ = cheerio.load(response);
    const similarProducts = [];
    $('div.s-similar-widget div.a-carousel-card').each((i, elem) => {
        const product = {
            title: $(elem).find('span.a-text-normal').text().trim(),
            link: $(elem).find('a').attr('href')
        };
        similarProducts.push(product);
    });
    return similarProducts;
};

const extractImagesFromResponse = (response) => {
    const $ = cheerio.load(response);
    const images = [];
    $('#altImages ul li img').each((i, elem) => {
        images.push($(elem).attr('src'));
    });
    return images;
};

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
