const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

// Middleware for parsing JSON
app.use(express.json());

app.use(cors());



// MongoDB connection
mongoose.connect('mongodb+srv://pavananna:Mongodb134@new.bes8xs6.mongodb.net/ap', {
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


const foodSchema =  new mongoose.Schema({
  image: String,
  price: String,
});

const Food = mongoose.model('food', foodSchema);

app.post("/postfood",(req,res) => {
  const newFood = new Food({
    image : req.body.image,
    price: req.body.price
  });
  newFood.save()
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err))
})

app.get("/getfood",(req,res) => {
  Food.find()
  .then((docs)=> { res.json(docs)})
  .catch((err) => res.status(400).json("Error: "
  + err));
})




const movieSchema =  new mongoose.Schema({
  image: String,
  price: String,
});

const Movie = mongoose.model('movie', movieSchema);

app.post("/postmovie",(req,res) => {
  const newMovie = new Movie({
    image : req.body.image,
    price: req.body.price
  });
  newMovie.save()
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err))
})

app.get("/getmovie",(req,res) => {
  Movie.find()
  .then((docs)=> { res.json(docs)})
  .catch((err) => res.status(400).json("Error: "
  + err));
})


// Register Route
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

// Login Route
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

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});










