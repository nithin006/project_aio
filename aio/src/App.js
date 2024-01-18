import React from "react"
import Navbar from "./components/Navbar"
import Food from "./components/Food"
import fooddata from "./fooddata"
import Movies from "./components/Movies"
import moviesdata from "./moviesdata"
import MoviesSpace from "./components/MoviesSpace"
import FoodSpace from "./components/FoodSpace"



export default function App(){
 const foods = fooddata.map(item => {
  return (
      <Food
      key={item.id}
      img={item.coverImg}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      location={item.location}
      title={item.title}
      price={item.price}
          
      />
  )
}) 
const movies = moviesdata.map(item => {
  return (
      <Movies
      key={item.id}
      img={item.coverImg}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      location={item.location}
      title={item.title}
      price={item.price}
          
      />
  )
}) 

return (
  <div>
    <Navbar />
    <MoviesSpace />
    <section className="cards-list">
      {movies}
    </section>
    <FoodSpace />
    <section className="cards-list">
      {foods}
    </section>
  </div>
)
}       


