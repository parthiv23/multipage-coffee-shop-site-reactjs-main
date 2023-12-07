import React from 'react';
import { Link } from 'react-router-dom';
import ImageGallery from '../components/ImageGallery';
import foundersOurStory from '../assets/images/founders-our-story.jpg';
import HeroBanner from '../components/HeroBanner';
import aboutHeroBanner from '../assets/images/6.jpg';

const Home = () => {
  return (
    <section className="main-content home">
      <HeroBanner heading="Have a cup Urban Coffee" imageFile={aboutHeroBanner} />
      <span className="logo--grounds">
        <br></br>
        <br></br>
        <section className="content-container welcome">


      <div>
       <big>"Welcome to <b>Urban Coffee</b>, your passport to a world of exotic coffee experiences!
        We are passionate about bringing the finest and most unique coffee beans from around the globe right to your doorstep."</big>
          </div>
          </section>
          </span>
          
      <section className="content-container image-gallery">
        <ImageGallery />
      </section>

      <div className="info-container wifi-info" align="center">
          <h1><b>Quality,Craftmanship & Passion</b></h1><br></br>
          <section className="content-container welcome">
          <p> <span className="wifi-password">When you indulge in a cup from <b>Urban Coffee</b>, you're not just savoring coffee; you’re experiencing the culmination of quality, craftsmanship, and passion. It’s not just a beverage; it’s a journey, a sensory adventure that lingers long after the last sip. Join us in this celebration of excellence, where every coffee poured is a testament to the heart and soul we pour into our craft."</span></p>
          </section>
           </div>

        <div className="info-container menu-info" align="center">
          <h2>See whats on our Menu...</h2>
          <Link to="/menu" className="button">View Our Menu</Link>
        </div>


        </section>
  );
}

export default Home;