// Imports
import React, { Component } from "react";
import Snake from "./Components/Snake";
import Food from "./Components/Food";
import Button from "./Components/Button";
import Menu from "./Components/Menu";
import "./App.css";

// Variable that generates food in random places
const getRandomFood = () => {
  let min = 1;
  let max = 98;
  let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  return [x, y];
}

// Initial State Variable
const initialState = {
  food: getRandomFood(),
  direction: "RIGHT",
  speed: 100,
  route: "menu",
  snakeDots: [
    [0, 0],
    [0, 2]
  ],
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  componentDidMount(){
    setInterval(this.moveSnake, this.state.speed);
    document.onkeydown = this.onKeyDown;
  }

  componentDidUpdate(){
    this.onSnakeOutOfBounds();
    this.onSnakeCollapsed();
    this.onSnakeEats();
  }

  onKeyDown = (e) => { 
    e.preventDefault(); 
    e = e || window.event; 
    switch (e.keyCode) { 
        case 37: 
            this.setState({ direction: "LEFT" }); 
            break; 
        case 38: 
            this.setState({ direction: "UP" }); 
            break; 
        case 39: 
            this.setState({ direction: "RIGHT" }); 
            break; 
        case 40: 
            this.setState({ direction: "DOWN" }); 
            break; 
    } 
}