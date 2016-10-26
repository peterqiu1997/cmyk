import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Scroll from 'react-scroll';
import { config } from 'config';
import { Link } from 'react-router';

import InteractiveTitle from '../components/InteractiveTitle';

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
        />
        <div className="section section--home">
          <InteractiveTitle />
          <div className="navigation">
            <div className="nav__item" id="about">about</div>
            <div className="nav__item" id="schedule">schedule</div>
            <div className="nav__item" id="registration">registration</div>
            <div className="nav__item" id="competition">competition</div>
          </div>
        </div>
        <div className="section section--about">
          about
        </div>
        <div className="section section--schedule">
          schedule
        </div>
        <div className="section section--registration">
          registration
        </div>
        <div className="section section--competition">
          competition
        </div>
      </div>
    );
  }
}

