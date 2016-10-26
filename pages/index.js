import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

import $ from 'jquery';
import _ from 'lodash';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render () {
    return (
      <div className="section section--home">
        <Helmet
          title={config.siteTitle}
        />
        <div className="title__wrapper">
          <img className="cmyk--horizontal" src="/img/cmyk.png"/>
          <img className="cmyk--square" src="/img/cmyk-square.png"/>
        </div>
        <div className="navigation">
          <div className="nav__item" id="about">about</div>
          <div className="nav__item" id="schedule">schedule</div>
          <div className="nav__item" id="registration">registration</div>
          <div className="nav__item" id="competition">competition</div>
        </div>
      </div>
    );
  }
}
