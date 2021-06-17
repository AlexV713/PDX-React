import React from 'react'
import { SliderData } from './SliderData';
import ImageSlider from './ImageSlider'

function Home() {
    return (
        <div>
            <ImageSlider slides={SliderData} />;
        </div>
    )
}

export default Home