import React from 'react'
import './Testimonials.css';
import Man from '../../images/Photos/Man.png'

function Testimonials() {
    return (
        <div className="testimonials">
            <h2>TESTIMONIALS</h2>
            <div className="row t__row">
                <img className="t__image" src={Man} alt=""/>
                <p className="t__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia recusandae, hic maiores similique sequi autem corrupti deserunt quibusdam pariatur iste ipsa vitae et? Nam consequatur ipsa distinctio quia nisi eligendi? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita ad ea veritatis officiis iure tempora, sunt quaerat omnis. Eveniet ducimus velit odio aliquid repellat saepe optio quod unde explicabo iste?</p>
            </div>
            
        </div>
    )
}

export default Testimonials
