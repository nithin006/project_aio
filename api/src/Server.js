
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();


app.use(express.json());

app.use(cors());

// Connecting to MongoDB:
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

// Schemas:
const foodSchema = new mongoose.Schema({
  
  price: Number,
  foodType: String,
  hotel: String
}, { strict: false });
const Food = mongoose.model('food', foodSchema);

// API for Getting Food Data:
app.get("/getfood", (req, res) => {
  Food.find()
    .then((docs) => { res.json(docs) })
    .catch((err) => res.status(400).json("Error: "
      + err));
})

const movieSchema = new mongoose.Schema({
  
  price: Number,
  theater: String,
  movie: String
}, { strict: false });
const Movie = mongoose.model('movie', movieSchema);
app.get("/getmovie", (req, res) => {
  Movie.find()
    .then((docs) => { res.json(docs) })
    .catch((err) => res.status(400).json("Error: "
      + err));
})

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});






