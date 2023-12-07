import React from 'react';
import MenuList from '../components/MenuList';
import HeroBanner from '../components/HeroBanner';
import menuHeroBanner from '../assets/images/menu-hero-banner.jpg';

const Menu = () => {
  return (
    <React.Fragment>
      <HeroBanner heading="Our Menu" imageFile={menuHeroBanner} />
      <section className="main-content menu">
        <h3>Products</h3>
        <p className="menu-info"><span className="bold">House Made Exotic Syrups 200rs:</span> Mocha, White Mocha, Caramel, Vanilla, Cinnamon, Raspberry, Hazelnut, Lavender</p>
        <h4>Roasted Coffee Beans</h4>
        <MenuList type="Coffee" />
        <p className="menu-info"></p>
        <h4>Coffee Powder</h4>
        <MenuList type="Espresso" />
        <h4>Tea</h4>
        <MenuList type="Tea" />
      </section>
      <br></br>
    </React.Fragment>
  );
}

export default Menu;