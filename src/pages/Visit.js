import React from 'react';
import HeroBanner from '../components/HeroBanner';
import visitHeroBanner from '../assets/images/visit-hero-banner.jpg';

const Visit = () => {
  return (
    <React.Fragment>
      <HeroBanner heading="Contact Us" imageFile={visitHeroBanner} />
      <section className="main-content visit">
        <h3>Phone</h3>
        <p><a href="tel:(+91)9898782049">(+91)9898782049</a></p>
        <h3>Email</h3>
        <p><a href="mailto:UrbanCoffee@gmail.com">UrbanCoffee@gmail.com</a></p>
        <h3>Location</h3>
        <p>Manufacturing at : Mondeal Square, SG Highway, Ahmedabad, Gujarat 380015, India</p>
      </section>
    </React.Fragment>
  );
}

export default Visit;