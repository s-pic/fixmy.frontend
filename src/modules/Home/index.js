import React from 'react';
import { Link } from 'react-router-dom';
import FixMyLogo from '~/images/logofmb@2x.png';

import MenuButton from '~/components/MenuButton';
import SocialButtons from '~/components/SocialButtons';

import './Home.styl';

export default () => (
  <div className="home app__content--overlay">
    <MenuButton />
    <div className="home__content">
      <div className="logo__container">
        <img width="70" src={FixMyLogo} alt="logo" />
      </div>
      <div className="intro__container">
        <h1>Hi, das ist FixMyBerlin</h1>
        <p className="text">Wir wollen, dass Berlin eine richtig gute Fahrradstadt wird. Hier siehst du bald, was dafür geplant wird. Trage dich für Updates zum Newsletter ein.
        </p>
      </div>
      <form className="intro__newsletter">
        <input className="input" type="text" placeholder="Deine Emailadresse" />
        <button className="btn btn--primary newsletter__subscribe" type="submit">Newsletter abonnieren</button>
      </form>
      <div className="intro__about">
        <Link to="/info">Worum geht es hier genau?</Link>
      </div>
      <div className="intro__social">
        <SocialButtons />
      </div>
    </div>
  </div>
);
