import React, { Component } from 'react';
import classNames from 'classnames';
import { prefixLink } from 'gatsby-helpers';

export default class InteractiveTitle extends React.Component {
  constructor(props) {
    super(props);

    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick(e, index) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="interactive-title">
        <div
          className="img__stack img__stack--1 img__stack--cyan"
        >
          <div className="img img--absolute img--1">
            <img src={prefixLink('/img/cmyk/Cyan1.png')} alt="" />
          </div>
          <div className="img img--absolute img--2">
            <img src={prefixLink('/img/cmyk/Cyan2.png')} alt="" />
          </div>
          <div className="img img--absolute img--3">
            <img src={prefixLink('/img/cmyk/Cyan3.png')} alt="" />
          </div>
          <div className="img img--absolute img--4">
            <img src={prefixLink('/img/cmyk/Cyan4.png')} alt="" />
          </div>
          <div className="img img--absolute img--5">
            <img src={prefixLink('/img/cmyk/Cyan5.png')} alt="" />
          </div>
        </div>
        <div
          className="img__stack img__stack--2 img__stack--magenta"
        >
          <div className="img img--absolute img--1">
            <img src={prefixLink('/img/cmyk/Magenta1.png')} alt="" />
          </div>
          <div className="img img--absolute img--2">
            <img src={prefixLink('/img/cmyk/Magenta2.png')} alt="" />
          </div>
          <div className="img img--absolute img--3">
            <img src={prefixLink('/img/cmyk/Magenta3.png')} alt="" />
          </div>
          <div className="img img--absolute img--4">
            <img src={prefixLink('/img/cmyk/Magenta4.png')} alt="" />
          </div>
          <div className="img img--absolute img--5">
            <img src={prefixLink('/img/cmyk/Magenta5.png')} alt="" />
          </div>
        </div>
        <div
          className="img__stack img__stack--3 img__stack--yellow"
        >
          <div className="img img--absolute img--1">
            <img src={prefixLink('/img/cmyk/Yellow1.png')} alt="" />
          </div>
          <div className="img img--absolute img--2">
            <img src={prefixLink('/img/cmyk/Yellow2.png')} alt="" />
          </div>
          <div className="img img--absolute img--3">
            <img src={prefixLink('/img/cmyk/Yellow3.png')} alt="" />
          </div>
          <div className="img img--absolute img--4">
            <img src={prefixLink('/img/cmyk/Yellow4.png')} alt="" />
          </div>
          <div className="img img--absolute img--5">
            <img src={prefixLink('/img/cmyk/Yellow5.png')} alt="" />
          </div>
        </div>
        <div
          className="img__stack img__stack--4 img__stack--black"
        >
          <div className="img img--absolute img--1">
            <img src={prefixLink('/img/cmyk/Black1.png')} alt="" />
          </div>
          <div className="img img--absolute img--2">
            <img src={prefixLink('/img/cmyk/Black2.png')} alt="" />
          </div>
          <div className="img img--absolute img--3">
            <img src={prefixLink('/img/cmyk/Black3.png')} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

