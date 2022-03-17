import React from 'react'
import { SliderData } from './components/SliderData';
import ImageSlider from './components/ImageSlider'

function Home() {
    return (
        <>
        <div id="home-page">
            <ImageSlider slides={SliderData} />
            <div id="grid-container">

                <div className="grid-text">
                    <h3>The Ultimate Handyman Experience</h3>
                    <p>PDX Handyman Services LLC is a professional renovator who offers a wide range of high-quality services like renovation, landscape, hardscape, painting, and installation. PDX Handyman Services LLC has renovated many homes entirely for many clients and future homeowners.</p>
                </div>

                <div className="grid-item1-video">
                    <video controls>
                        <source src="images/video.mp4" type="video/mp4"/>
                        Your browser does not support the video tag :(
                    </video>                    
                </div>

                <div className="grid-item2-video">
                    <video controls>
                        <source src="images/video-2.mp4" type="video/mp4"/>
                        Your browser does not support the video tag :(
                    </video>                    
                </div>

                <div className="grid-text">
                    <h3>Ethical Practices &#38; Hard Work</h3>
                    <p>PDX Handyman Services LLC values ethical practices to ensure people’s safety and daily living. I take pride in my work and motivate myself to work hard to meet deadlines and give great services.</p>
                </div>

                <div className="grid-item1-video-mobile">
                    <video controls>
                        <source src="images/video.mp4" type="video/mp4"/>
                        Your browser does not support the video tag :(
                    </video>                    
                </div>

                <div className="grid-text">
                    <h3>Over 30 Years of Experience</h3>
                    <p>With over 30 years of experience, his services have helped many clients renovate their homes and patios across Oregon. PDX Handyman Services LLC prides itself in offering clients the best handyman experience and luxurious homes and patios.</p>
                </div>

                <div class="grid-images">
                    <img src="./images/28.jpg" alt="home renovations" className="grid-item3-image" />
                </div>
                
            </div>

            <h2>Services</h2>
            <div id="services-container">
                <div>
                    <img src="./images/handyman.jpg" alt="handyman" />
                    <p>Handyman</p>                    
                </div>
                <div>
                    <img src="./images/remodeling.jpg" alt="renovation" />
                    <p>Renovation</p>                    
                </div>
                <div>
                    <img src="./images/landscape.jpg" alt="landscape and landscaper" />
                    <p>Landscape</p>                    
                </div>
                <div>
                    <img src="./images/hardscape.jpg" alt="hardscape and hardscaper" />
                    <p>Hardscape</p>                    
                </div>
                <div>
                    <img src="./images/painting.jpg" alt="home painting" />
                    <p>Painting</p>                    
                </div>
                <div>
                    <img src="./images/installation.jpg" alt="window or door installation" />
                    <p>Installation</p>                    
                </div>
            </div>
        </div>
        </>
    )
}

export default Home