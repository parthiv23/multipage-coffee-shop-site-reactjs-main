import React from 'react';
import HeroBanner from '../components/HeroBanner';
import aboutHeroBanner from '../assets/images/9.jpg';
import foundersOurStory from '../assets/images/11.jpg';
import foundersOurMission from '../assets/images/8.jpg';

const About = () => {
  return (
    <React.Fragment>
      <HeroBanner heading="About Us" imageFile={aboutHeroBanner} />
      <section className="main-content about">
        <h3>Our Story</h3>
        <section className="content-container">
          <figure>
            <img src={foundersOurStory} alt="photo of founders smiling at camera in the kitchen" />
          </figure>
          <h2> "From Bean to Dream": The Journey of Urban coffee</h2>
          <p>In the heart of a bustling city, there lived a passionate coffee enthusiast named Maya. Every morning, as the sun painted the sky with hues of orange and pink, Maya found solace in her cup of freshly brewed coffee. For her, coffee was more than just a beverage; it was an experience, a journey through cultures, flavors, and stories.</p>
          <p>Back home, armed with knowledge and a curated selection of the finest beans, Maya launched her online coffee shop, naming it <b>Urban Coffee</b> The virtual doors opened, and coffee enthusiasts from every corner of the world stepped in. What they found was not just a store but a rich tapestry of flavors, a celebration of diversity, and a tribute to the farmers who nurtured the beans with love and care.</p>
          <p>And so, the legacy of <b>Urban Coffee</b> continued, reminding the world that behind every sip of coffee lies a story of passion, perseverance, and the pursuit of dreams. Maya's journey had taught them that with dedication and a sprinkle of love, any dream, no matter how audacious, could be brewed into reality.</p>
        </section>
        <h3>Our Mission</h3>
        <section className="content-container">
          <figure>
            <img src={foundersOurMission} alt="photo of founders brewing coffee in the kitchen" />
          </figure>
          <p>The mission of <b>Urban Coffee</b> is to create a global community of coffee lovers, united by our passion for exceptional coffee experiences. We are dedicated to sourcing the finest and most exotic coffee beans from around the world, celebrating the diversity of flavors and aromas that different regions offer.</p>
          <p>We believe in the importance of ethical and sustainable coffee practices. We work directly with farmers and cooperatives, ensuring fair wages, environmentally friendly cultivation methods, and community development. By promoting sustainable coffee production, we contribute to the well-being of the farmers, their families, and the environment.</p>
        </section>
      </section>
    </React.Fragment>
  );
}

export default About;