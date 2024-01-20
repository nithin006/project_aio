const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

app.use(cors());

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

// Mongoose Schema and Model (User)
const userSchema = new mongoose.Schema({
  name: String,
  password: String,
  email: String,
});
const User = mongoose.model('mynew', userSchema);

// Defines a food schema and model for MongoDB
const foodSchema =  new mongoose.Schema({
  image: String,
  price: Number,
  foodType: String,
  hotel: String,
});
const Food = mongoose.model('food', foodSchema);

// POST /postfood: Adds a new food item to the database.
app.post("/postfood",(req,res) => {
  const newFood = new Food({
    image: req.body.image,
    price: req.body.price,
    hotel: req.body.hotel,
    foodType: req.body.foodType
  });
  newFood.save()
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err))
})


// GET /getfood: Retrieves all food items from the database
app.get("/getfood",(req,res) => {
  Food.find()
  .then((docs)=> { res.json(docs)})
  .catch((err) => res.status(400).json("Error: "
  + err));
})

// Defines a movie schema and model for MongoDB
const movieSchema =  new mongoose.Schema({
  image: String,
  price: Number,
  theater: String,
  movie: String, 
  count: {
    type:Number,
    default:0,
  },
});
const Movie = mongoose.model('movie', movieSchema);

// POST /postfood: Adds a new food item to the database
app.post("/postmovie",(req,res) => {
  const newMovie = new Movie({
    image: req.body.image,
    price: req.body.price,
    theater: req.body.theater,
    movie: req.body.movie
  });
  newMovie.save()
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err))
})

// GET /getmovie: Retrieves all movie items from the database
app.get("/getmovie",(req,res) => {
  Movie.find()
  .then((docs)=> { res.json(docs)})
  .catch((err) => res.status(400).json("Error: "
  + err));
})


// POST /register: Registers a new user in the database
app.post('/register', async (req, res) => {
  const { name, password, email } = req.body;
  console.log('Received data:', { name, password, email }); // Log received data
  try {
    // Check if the user already exists in the database
    const existingUser = await User.findOne({ name });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user
    const newUser = new User({ name, password, email });
    await newUser.save();

    return res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

// POST /login: Handles user login and redirects on success
app.post('/login', async (req, res) => {
  const { name, password } = req.body;
  
  try {
    // Check if the user exists in the database with provided credentials
    const user = await User.findOne({ name, password });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // If login is successful, redirect to a success URL (e.g., '/home')
    return res.status(200).json({ message: 'Login successful', redirect: '/home' });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

// DELETE /deletefood/:id: Deletes a food item by ID
app.delete('/deletefood/:id', async (req, res) => {
  const id = req.params.id;
  try {
    await Food.findByIdAndDelete(id);
    console.log("Food item deleted successfully");
    res.json({ message: 'Food item deleted successfully' });
  } catch (error) {
    console.log("Internal Server Error");
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// DELETE /deletemovie/:id: Deletes a movie item by ID
app.delete('/deletemovie/:id', async (req, res) => {
  const id = req.params.id;
  try {
    await Movie.findByIdAndDelete(id);
    console.log("Movie item deleted successfully");
    res.json({ message: 'Movie item deleted successfully' });
  } catch (error) {
    console.log("Internal Server Error");
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server Listens on the specified port (8000)
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

