
# AmazonScout

AmazonScout is a Node.js application that allows users to fetch product details, reviews, offers, and search results from Amazon using the ScraperAPI.

## Live Demo

The API is live and hosted on Vercel. You can access the API and the endpoints from [https://amazonscout.bardanp.com](https://amazonscout.bardanp.com).

## Features

- **Fetch Product Details:** Retrieve detailed information about a product by its Amazon product ID.
- **Fetch Product Reviews:** Get reviews for a specific product by its Amazon product ID.
- **Fetch Product Offers:** Access current offers for a product by its Amazon product ID.
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
  - **Example Request:** `/products/B07X66DCLM?api_key=YOUR_SCRAPER_API_KEY`

- `GET /products/:productID/reviews`
  - Fetch product reviews from Amazon.
  - **Query Parameters:** 
    - `api_key` (required): Your ScraperAPI key.
  - **Example Request:** `/products/B07X66DCLM/reviews?api_key=YOUR_SCRAPER_API_KEY`

- `GET /products/:productID/offers`
  - Fetch product offers from Amazon.
  - **Query Parameters:** 
    - `api_key` (required): Your ScraperAPI key.
  - **Example Request:** `/products/B07X66DCLM/offers?api_key=YOUR_SCRAPER_API_KEY`

### Search Endpoint

- `GET /search/:searchQuery`
  - Perform a search on Amazon and retrieve search results.
  - **Query Parameters:** 
    - `api_key` (required): Your ScraperAPI key.
  - **Example Request:** `/search/laptop?api_key=YOUR_SCRAPER_API_KEY`

## Using the API

To use the API, you need to provide your ScraperAPI key as a query parameter (`api_key`) in each request. You can obtain a ScraperAPI key by signing up at [ScraperAPI](https://www.scraperapi.com/).

### Example Requests

1. **Get Product Details**
   ```bash
   GET /products/B07X66DCLM?api_key=YOUR_SCRAPER_API_KEY
   ```

2. **Get Product Reviews**
   ```bash
   GET /products/B07X66DCLM/reviews?api_key=YOUR_SCRAPER_API_KEY
   ```

3. **Get Product Offers**
   ```bash
   GET /products/B07X66DCLM/offers?api_key=YOUR_SCRAPER_API_KEY
   ```

4. **Search Products**
   ```bash
   GET /search/laptop?api_key=YOUR_SCRAPER_API_KEY
   ```

## Technologies Used

- Node.js
- Express.js
- ScraperAPI


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

