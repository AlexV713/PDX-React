import React from 'react'
import { SliderData } from './SliderData';
import ImageSlider from './ImageSlider'

function Home() {
    return (
        <>
        <div id="home-page">
            <ImageSlider slides={SliderData} />
            <div id="grid-container">
                <div className="grid-item1">
                    <h3>The Ultimate Handyman Experience</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Vel turpis nunc eget lorem dolor. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Ut ornare lectus sit amet est placerat in. In ornare quam viverra orci sagittis eu volutpat odio. Eu consequat ac felis donec et odio pellentesque diam volutpat. Ultrices tincidunt arcu non sodales neque sodales ut etiam.</p>
                </div>

                <div className="grid-item1-video">
                    <video controls>
                        <source src="images/video.mp4" type="video/mp4"/>
                        Your browser does not support the video tag :(
                    </video>                    
                </div>

                <div className="grid-item2">
                    <h3>Ethical Practices &#38; Hard Work</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Vel turpis nunc eget lorem dolor. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Ut ornare lectus sit amet est placerat in. In ornare quam viverra orci sagittis eu volutpat odio. Eu consequat ac felis donec et odio pellentesque diam volutpat. Ultrices tincidunt arcu non sodales neque sodales ut etiam.</p>
                </div>

                <div className="grid-item2-video">
                    <video controls>
                        <source src="images/video-2.mp4" type="video/mp4"/>
                        Your browser does not support the video tag :(
                    </video>                    
                </div>

                <div className="grid-item3">
                    <h3>More Than 30 Years of Experience</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Vel turpis nunc eget lorem dolor. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Ut ornare lectus sit amet est placerat in. In ornare quam viverra orci sagittis eu volutpat odio. Eu consequat ac felis donec et odio pellentesque diam volutpat. Ultrices tincidunt arcu non sodales neque sodales ut etiam.</p>
                </div>

                <img src="./images/28.jpg" alt="Change Later" className="grid-item3-image" />
                
            </div>

            <h2>Services</h2>
            <div id="services-container">
                <div>
                    <img src="./images/handyman.jpg" alt="handyman work" />
                    <p>Handyman</p>                    
                </div>
                <div>
                    <img src="./images/remodeling.jpg" alt="handyman work" />
                    <p>Renovation</p>                    
                </div>
                <div>
                    <img src="./images/landscape.jpg" alt="landscaper" />
                    <p>Landscape</p>                    
                </div>
                <div>
                    <img src="./images/hardscape.jpg" alt="handyman work" />
                    <p>Hardscape</p>                    
                </div>
                <div>
                    <img src="./images/painting.jpg" alt="handyman work" />
                    <p>Painting</p>                    
                </div>
                <div>
                    <img src="./images/installation.jpg" alt="handyman work" />
                    <p>Installation</p>                    
                </div>
            </div>
        </div>
        </>
    )
}

export default Home