import React from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FoodItemList from './FoodItemList';
import FoodItemEdit from './FoodItemEdit';
import ReportList from "./reportList";
import ReportDetail from "./reportDetail";

const App = () => {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path='/FoodItems' exact={true} element={<FoodItemList/>}/>
          <Route path='/foodItems/:id' element={<FoodItemEdit/>}/>
            <Route path='/reports' exact={true} element={<ReportList/>}/>
            <Route path='/reports/:id' element={<ReportDetail/>}/>
        </Routes>
      </Router>
  )
}

export default App;