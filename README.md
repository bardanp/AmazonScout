# AmazonScout

AmazonScout is a simple Node.js application that fetches product details, reviews, offers, and search results from Amazon using the ScraperAPI.

## Features

- Fetch product details by product ID
- Fetch product reviews by product ID
- Fetch product offers by product ID
- Fetch search results by search query

## Endpoints

- `/products/:productID` - Get product details from Amazon
- `/products/:productID/reviews` - Get product reviews from Amazon
- `/products/:productID/offers` - Get product offers from Amazon
- `/search/:searchQuery` - Get search results from Amazon

## ScraperAPI

This application uses [ScraperAPI](https://www.scraperapi.com/) to scrape data from Amazon. You will need to provide your ScraperAPI key as a query parameter (`api_key`) in each request.

## Technologies Used

- Node.js
- Express.js
- ScraperAPI

## License

This project is licensed under the MIT License.
