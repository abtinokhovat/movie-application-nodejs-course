# Movie Application using Node.js and Express

This is a Movie Application that allows users to view, add, edit, and delete movies. The project is built using Node.js and Express framework, and it uses MongoDB as the database to store movie information.

## Installation

1. Install MongoDb On your system
2. Clone the repository: `git clone https://github.com/your-username/movie-application.git`
3. Install dependencies: `npm install`

## Configuration

1. Open the `config.js` file and update the MongoDB connection URL if necessary.

## Usage

1. Start the application: `npm start`
2. Access the application at `http://localhost:3000`

### Endpoints

#### GET /movies

- Description: Fetches all movies
- Response Format: JSON
- Example Response:
  ```json
  [
    {
      "title": "The Shawshank Redemption",
      "director": "Frank Darabont",
      "genre": "Drama",
      "imageUrl": "https://example.com/poster.jpg",
      "year": 1994
    },
    {
      "title": "The Godfather",
      "director": "Francis Ford Coppola",
      "genre": "Crime",
      "imageUrl": "https://example.com/poster.jpg",
      "year": 1972
    }
  ]
  ```

#### POST /movies

- Description: Adds a new movie
- Request Format: JSON
- Example Request:
  ```json
  {
    "title": "Inception",
    "director": "Christopher Nolan",
    "genre": "Sci-Fi",
    "imageUrl": "https://example.com/poster.jpg",
    "year": 2010
  }
  ```
- Response Format: JSON
- Example Response:
  ```json
  {
    "title": "Inception",
    "director": "Christopher Nolan",
    "genre": "Sci-Fi",
    "imageUrl": "https://example.com/poster.jpg",
    "year": 2010
  }
  ```

#### PUT /movies/:id

- Description: Updates an existing movie
- Request Format: JSON
- Example Request:
  ```json
  {
    "title": "Inception",
    "director": "Christopher Nolan",
    "genre": "Sci-Fi/Thriller",
    "imageUrl": "https://example.com/poster.jpg",
    "year": 2010
  }
  ```
- Response Format: JSON
- Example Response:
  ```json
  {
    "title": "Inception",
    "director": "Christopher Nolan",
    "genre": "Sci-Fi/Thriller",
    "imageUrl": "https://example.com/poster.jpg",
    "year": 2010
  }
  ```

#### DELETE /movies/:id

- Description: Deletes a movie
- Response Format: JSON
- Example Response:
  ```json
  {
    "message": "Movie deleted successfully"
  }
  ```

## Project Structure

- `app.js`: Entry point of the application
- `config.js`: Configuration file
- `routes/movies.js`: Movie routes definition
- `models/movie.js`: Movie model definition

## Dependencies

- [Express](https://expressjs.com/): Fast, unopinionated, minimalist web framework for Node.js
- [Mongoose](https://mongoosejs.com/): Elegant MongoDB object modeling for Node.js

## License

This project is licensed under the MIT License.