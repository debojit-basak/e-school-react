import React from 'react';
import './Teacher.css';
import t1 from '../../images/Teachers/member1.jpg';
import t2 from '../../images/Teachers/member2.jpg';
import t3 from '../../images/Teachers/member3.jpg'

function Teacher() {
    return (
        <div className="teacher">
            <h2>OUR TEACHERS</h2>
            <div className="row">
                <div className="team">
                    <img className="teacher__image" src={t1} alt=""/>
                    <h4>Lorem Lorem</h4>
                    <p>MATH DEPARTMENT</p>
                </div>
                <div className="team">
                    <img className="teacher__image" src={t2} alt=""/>
                    <h4>Lorem Lorem</h4>
                    <p>PHYSICS DEPARTMENT</p>
                </div>
                <div className="team">
                    <img className="teacher__image" src={t3} alt=""/>
                    <h4>Lorem Lorem</h4>
                    <p>CSE DEPARTMENT</p>
                </div>
            </div>
            
        </div>
    )
}

export default Teacher
