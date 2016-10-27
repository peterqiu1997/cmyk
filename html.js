import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { prefixLink } from 'gatsby-helpers';

const BUILD_TIME = new Date().getTime();

export default class Html extends Component {
  render() {
    const head = Helmet.rewind();

    const css = process.env.NODE_ENV === 'production' ? (
      <style
        dangerouslySetInnerHTML={{
          __html: require('!raw!./public/styles.css')
        }}
      />
    ) : null;

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="author" content="Julia Sun" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="description"
            content="Come Make Your Mark at Innovative Design's Annual CMYK Designathon!"
          />
          <meta
            name="keywords"
            content="innovative, design, innovative design, college, berkeley, design club, design organization, designation, cmyk, cal, cmyk designathon"
          />
          <meta
            property="og:image"
            content="http://cmyk.innovativedesign.club/img/cmyk-square.png"
          />
          <meta
            property="og:title"
            content="CMYK Designation"
          />
          <meta
            property="og:type"
            content="website" />
          <meta
            property="og:url"
            content="http://cmyk.innovativedesign.club"
          />

          <link
            rel="icon"
            type="img/png"
            href={ prefixLink('/img/cmyk-square.png') }
          />
          <link
            href="https://fonts.googleapis.com/css?family=Lato:400,700,900"
            rel="stylesheet"
          />
          {head.title.toComponent()}
          {head.meta.toComponent()}
          {css}
        </head>
        <body>
          <div
            id="react-mount"
            dangerouslySetInnerHTML={{
              __html: this.props.body
            }}
          />
          <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
        </body>
      </html>
    );
  }
}

Html.propTypes = {
  body: PropTypes.string
};

