### Backend API 
#### This code sets up a basic Express.js server, connects to a MongoDB database, defines schemas for two collections ("food" and "movie"), and provides two API endpoints ("/getfood" and "/getmovie") to fetch data from the respective collections in the database.

#### 1.Importing Required Modules:
``` javascript
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
```
##### express: The Express.js framework for building web applications.
##### cors: Middleware for handling Cross-Origin Resource Sharing (CORS) to allow requests from different origins.
##### mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js.

#### 2.Creating Express Application:
``` javascript
const app = express();
```
##### app is an instance of the Express application.
#### 3.Middleware Setup:
``` javascript
app.use(express.json());
app.use(cors());
```
#### 4.Connecting to MongoDB:
``` javascript
mongoose.connect('mongodb+srv://pavananna:Mongodb134@new.bes8xs6.mongodb.net/nithin', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
```
##### Connects to a MongoDB database using Mongoose. The connection string includes the username, password, cluster URL, and database name.
##### Uses the mongoose.connect method, and then and catch to handle successful and failed connections, respectively.
#### 5.Defining Mongoose Schemas:
``` javascript
const foodSchema = new mongoose.Schema({
  price: Number,
  foodType: String,
  hotel: String
}, { strict: false });
const Food = mongoose.model('food', foodSchema);
```
##### Defines a Mongoose schema for the 'food' collection with fields: price, foodType, and hotel.
##### strict: false allows documents to have additional fields not defined in the schema.
##### Creates a Mongoose model named Food based on the 'foodSchema'.
``` javascript
const movieSchema = new mongoose.Schema({
  price: Number,
  theater: String,
  movie: String
}, { strict: false });
const Movie = mongoose.model('movie', movieSchema);
```
##### similar to movie schema
#### 6.API Routes for Getting Data:
``` javascript
app.get("/getfood", (req, res) => {
  Food.find()
    .then((docs) => { res.json(docs) })
    .catch((err) => res.status(400).json("Error: " + err));
});
```
##### Defines a route for handling GET requests to "/getfood".
##### Retrieves all documents from the 'food' collection using Food.find().
##### Sends the retrieved documents as JSON in the response.
#### 7.Setting up Server:
``` javascript
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```
##### Specifies a port number (either from the environment variable PORT or defaulting to 8000).
##### Listens for incoming connections on the specified port and logs a message to the console when the server is running.

##### For installing dependendencies use `npm install` in terminal.
##### To start server run `node server` in same directory of the app.







