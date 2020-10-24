import React from 'react';
import './Home.css';
import Illustration from '../../images/Photos/Illustration.png';

function Home() {
    return (
        <div className="home">
            <div className="row">
            <div className="home__item">
               <p className="heading">Are you ready to learn</p>
               <h1>Learn with fun <br/>on any <span>any schedule</span></h1>
               <p>Lorem ipsum dolor browser <br /> sit amet consectetur adipisicing elit. Veniam </p>
               <br/>
               <button>GET STARTED</button>
            </div>
            <img className="home__image" src={Illustration} alt=""/>
            </div>
            
        </div>
    )
}

export default Home
