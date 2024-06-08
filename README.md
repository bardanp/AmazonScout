
# AmazonScout

AmazonScout is a Node.js application that allows users to fetch product details, reviews, offers, categories, similar products, images, best-sellers, and search results from Amazon using the ScraperAPI.

## Live Demo

The API is live and hosted on Vercel. You can access the API and the endpoints from [https://amazonscout.bardanp.com](https://amazonscout.bardanp.com).

## Features

- **Fetch Product Details:** Retrieve detailed information about a product by its Amazon product ID.
- **Fetch Product Reviews:** Get reviews for a specific product by its Amazon product ID.
- **Fetch Product Offers:** Access current offers for a product by its Amazon product ID.
- **Fetch Product Categories:** Retrieve the categories a product belongs to.
- **Fetch Similar Products:** Retrieve a list of products similar to the given product.
- **Fetch Product Images:** Retrieve all images for a given product.
- **Fetch Best Sellers:** Get the best-selling products in a given category.
- **Search Products:** Perform a search on Amazon and retrieve search results.

## Endpoints

### Root Endpoint

- `GET /`
  - Returns a welcome message with instructions.

### Product Endpoints

- `GET /products`
  - Returns instructions for using the `/products` endpoint.

- `GET /products/:productID`
  - Fetch product details from Amazon.
  - **Query Parameters:** 
    - `api_key` (required): Your ScraperAPI key.
  - **Example Request:** `/products/B08N5WRWNW?api_key=YOUR_SCRAPER_API_KEY`

- `GET /products/:productID/reviews`
  - Fetch product reviews from Amazon.
  - **Query Parameters:** 
    - `api_key` (required): Your ScraperAPI key.
  - **Example Request:** `/products/B08N5WRWNW/reviews?api_key=YOUR_SCRAPER_API_KEY`

- `GET /products/:productID/offers`
  - Fetch product offers from Amazon.
  - **Query Parameters:** 
    - `api_key` (required): Your ScraperAPI key.
  - **Example Request:** `/products/B08N5WRWNW/offers?api_key=YOUR_SCRAPER_API_KEY`

- `GET /products/:productID/categories`
  - Fetch product categories from Amazon.
  - **Query Parameters:** 
    - `api_key` (required): Your ScraperAPI key.
  - **Example Request:** `/products/B08N5WRWNW/categories?api_key=YOUR_SCRAPER_API_KEY`

- `GET /products/:productID/similar`
  - Fetch similar products from Amazon.
  - **Query Parameters:** 
    - `api_key` (required): Your ScraperAPI key.
  - **Example Request:** `/products/B08N5WRWNW/similar?api_key=YOUR_SCRAPER_API_KEY`

- `GET /products/:productID/images`
  - Fetch product images from Amazon.
  - **Query Parameters:** 
    - `api_key` (required): Your ScraperAPI key.
  - **Example Request:** `/products/B08N5WRWNW/images?api_key=YOUR_SCRAPER_API_KEY`

### Search Endpoint

- `GET /search/:searchQuery`
  - Perform a search on Amazon and retrieve search results.
  - **Query Parameters:** 
    - `api_key` (required): Your ScraperAPI key.
  - **Example Request:** `/search/laptop?api_key=YOUR_SCRAPER_API_KEY`

### Best Sellers Endpoint

- `GET /bestsellers/:category`
  - Fetch best-selling products in a given category.
  - **Query Parameters:** 
    - `api_key` (required): Your ScraperAPI key.
  - **Example Request:** `/bestsellers/electronics?api_key=YOUR_SCRAPER_API_KEY`

## Using the API

To use the API, you need to provide your ScraperAPI key as a query parameter (`api_key`) in each request. You can obtain a ScraperAPI key by signing up at [ScraperAPI](https://www.scraperapi.com/).

### Example Requests

1. **Get Product Details**
   ```bash
   GET /products/{productID}?api_key=YOUR_SCRAPER_API_KEY
   ```

2. **Get Product Reviews**
   ```bash
   GET /products/{productID}/reviews?api_key=YOUR_SCRAPER_API_KEY
   ```

3. **Get Product Offers**
   ```bash
   GET /products/{productID}/offers?api_key=YOUR_SCRAPER_API_KEY
   ```

4. **Get Product Categories**
   ```bash
   GET /products/{productID}/categories?api_key=YOUR_SCRAPER_API_KEY
   ```

5. **Get Similar Products**
   ```bash
   GET /products/{productID}/similar?api_key=YOUR_SCRAPER_API_KEY
   ```

6. **Get Product Images**
   ```bash
   GET /products/{productID}/images?api_key=YOUR_SCRAPER_API_KEY
   ```

7. **Search Products**
   ```bash
   GET /search/{searchQuery}?api_key=YOUR_SCRAPER_API_KEY
   ```

8. **Get Best Sellers**
   ```bash
   GET /bestsellers/{category}?api_key=YOUR_SCRAPER_API_KEY
   ```

## Technologies Used

- Node.js
- Express.js
- ScraperAPI
- Cheerio (for HTML parsing)


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
