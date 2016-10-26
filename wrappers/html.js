import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';

export default class HtmlWrapper extends Component {
  render() {
    const page = this.props.route.page.data;
    return (
      <div dangerouslySetInnerHTML={{ __html: page.body }} />
    );
  }
}

HtmlWrapper.propTypes = {
  router: PropTypes.object
};

