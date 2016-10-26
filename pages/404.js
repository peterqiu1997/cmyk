import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

export default class NotFound extends Component {
  render () {
    return (
      <div className="page page--not-found">
        <Helmet
          title={config.siteTitle}
        />
        <h1>
          The page you were looking for cannot be found.
        </h1>
      </div>
    );
  }
}
