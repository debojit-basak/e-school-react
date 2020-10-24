import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Books from './Components/Books/Books';
import Courses from './Components/Courses/Courses';
import Teacher from './Components/Teachers/Teacher';
import Testimonials from './Components/Testimonials/Testimonials';
import Footer from './Components/Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="app">
      {/*  */}
      <Switch>
        <Route path='/courses'>
        <Header></Header>
          <Courses></Courses>
        </Route>
        <Route path='/teachers'>
        <Header></Header>
          <Teacher></Teacher>
        </Route>
        <Route path='/testimonials'>
        <Header></Header>
          <Testimonials></Testimonials>
        </Route>
        <Route path='/'>
        <Header></Header>
      <Home></Home>
      <Books></Books>
      <Courses></Courses>
      <Teacher></Teacher>
      <Testimonials></Testimonials>
      <Footer></Footer>
        </Route>
      </Switch>

    </div>
    </Router>
  );
}

export default App;
