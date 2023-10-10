import React from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FoodItemList from './FoodItemList';
import FoodItemEdit from './FoodItemEdit';
import ToppingList from "./ToppingList";
import ToppingEdit from "./ToppingEdit";
import ReportList from "./reportList";

const App = () => {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path='/FoodItems' exact={true} element={<FoodItemList/>}/>
          <Route path='/foodItems/:id' element={<FoodItemEdit/>}/>
            <Route path='/Toppings' exact={true} element={<ToppingList/>}/>
            <Route path='/toppings/:id' element={<ToppingEdit/>}/>
            <Route path='/reports' exact={true} element={<ReportList/>}/>
        </Routes>
      </Router>
  )
}

export default App;