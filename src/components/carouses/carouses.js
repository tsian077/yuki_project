import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import { Carousel } from 'react-bootstrap';
// https://i.imgur.com/rvkCMfx.jpg
export default function Carouses(){
    return(
        <div >
        <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://i.imgur.com/NFVYm87.png"
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://i.imgur.com/NFVYm87.png"
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        
        </Carousel>
        </div>
    )
}