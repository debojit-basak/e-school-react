import React from 'react';
import './Courses.css';
import C1 from '../../images/Photos/Morder psyc.png';
import C2 from '../../images/Photos/Morder pychons.png';
import C3 from '../../images/Photos/Morder pyschology.png'

function Courses() {
    return (
        <div className="courses">
            <h2>ONLINE COURSES</h2>
            <div className="row">
            <div className="course__body">
                <img className="course__image" src={C1} alt=""/>
                <h4>Modern Psychology</h4>
                <p>Description:</p>
                <p>Lorem ipsum dolor sit amet consect</p>
                <br/>
               <button className="">Learn More</button>
            </div>
            <div className="course__body">
                <img className="course__image" src={C2} alt=""/>
                <h4>Modern Psychology</h4>
                <p>Description:</p>
                <p>Lorem ipsum dolor sit amet consect</p>
                <br/>
               <button className="">Learn More</button>
            </div>
            <div className="course__body">
                <img className="course__image" src={C3} alt=""/>
                <h4>Modern Psychology</h4>
                <p>Description:</p>
                <p>Lorem ipsum dolor sit amet consect</p>
                <br/>
               <button className="">Learn More</button>
            </div>
            </div>
            
        </div>
    )
}

export default Courses
