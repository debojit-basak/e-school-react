import React from 'react';
import './Books.css';
import Book1 from '../../images/ICON/book.png';
import Book2 from '../../images/ICON/Student.png';
import Book3 from '../../images/ICON/Students.png';
import Book4 from '../../images/ICON/Test.png'


function Books() {
    return (
        <div className="books">
            <div className="row">
                <div className="book__box">
                    <img src={Book1} alt=""/>
                    <h4>1500+ topics</h4>
                    <p>Learn anything</p>
                </div>
                <div className="book__box">
                    <img src={Book2} alt=""/>
                    <h4>1100 courses</h4>
                    <p>Learn anything</p>
                </div>
                <div className="book__box">
                    <img src={Book3} alt=""/>
                    <h4>9k+ tests</h4>
                    <p>Learn anything</p>
                </div>
                <div className="book__box">
                    <img src={Book4} alt=""/>
                    <h4>1600 teachers</h4>
                    <p>Learn anything</p>
                </div>
            </div>
    
        </div>
    )
}

export default Books
