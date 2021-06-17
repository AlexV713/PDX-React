import React from 'react'
import { SliderData } from './SliderData';
import ImageSlider from './ImageSlider'

function Home() {
    return (
        <>
        <div id="home-page">
            <ImageSlider slides={SliderData} />
            <h3>The Ultimate Handyman Experience</h3>
            <p>PDX Handyman Services is a family-owned company that offers the ultimate handyman experience here in Oregon. For more than 30 years in the field, ethical practices, and hard work have branded our services.</p>
            <h3>Services</h3>
            <div id="services-container">
                <img src="https://cdn.pixabay.com/photo/2017/12/19/12/54/mechanic-3027932_1280.jpg" alt="handyman work" />
                <p>Handyman</p>
                <img src="https://cdn.pixabay.com/photo/2017/12/19/12/54/mechanic-3027932_1280.jpg" alt="handyman work" />
                <p>Landscape</p>
                <img src="https://cdn.pixabay.com/photo/2017/12/19/12/54/mechanic-3027932_1280.jpg" alt="handyman work" />
                <p>Hardscape</p>
                <img src="https://cdn.pixabay.com/photo/2017/12/19/12/54/mechanic-3027932_1280.jpg" alt="handyman work" />
                <p>Remodeling</p>
                <img src="https://cdn.pixabay.com/photo/2017/12/19/12/54/mechanic-3027932_1280.jpg" alt="handyman work" />
                <p>Painting</p>
            </div>
        </div>
        </>
    )
}

export default Home