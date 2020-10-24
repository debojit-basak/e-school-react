import React from 'react';
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="footer__top row">
                <div className="footer__left">
                    MILLIONS OF PEOPLE AROUND THE WORLD ARE IMPROVING THEIR LIVES WITH US
                </div>
                <div className="row footer__right">
                    <div className="footer-item">
                      {/* <h4 className="footer-h">COURSES</h4> */}
                      <ul>Graphic Design</ul>
                      <ul>Web design</ul>
                      <ul>digital marketing</ul>
                    </div>
                    <div className="footer-item">
                    
                {/* <h4  className="footer-h">TERMS</h4> */}
                <ul>Graphic Design</ul>
                      <ul>Web design</ul>
                      <ul>digital marketing</ul>
                    </div>
                    <div className="footer-item">
                       
                        {/* <h4 className="footer-h">USEFUL LINKS</h4> */}
                        <ul>Graphic Design</ul>
                      <ul>Web design</ul>
                      <ul>digital marketing</ul>
                    </div>
                </div>

            </div>
            <div className="footer__bottom">
                COPY RIGHT RESERVED BY ME
            </div>
            
        </div>
    )
}

export default Footer
