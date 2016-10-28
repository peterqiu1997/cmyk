import React, { Component } from 'react';
import classNames from 'classnames';
import { prefixLink } from 'gatsby-helpers';

const cyanImages = [
  prefixLink('/img/cmyk/Cyan1.png'),
  prefixLink('/img/cmyk/Cyan2.png'),
  prefixLink('/img/cmyk/Cyan3.png'),
  prefixLink('/img/cmyk/Cyan4.png')
];

const magentaImages = [
  prefixLink('/img/cmyk/Magenta1.png'),
  prefixLink('/img/cmyk/Magenta2.png'),
  prefixLink('/img/cmyk/Magenta3.png'),
  prefixLink('/img/cmyk/Magenta4.png')
];

const yellowImages = [
  prefixLink('/img/cmyk/Yellow1.png'),
  prefixLink('/img/cmyk/Yellow2.png'),
  prefixLink('/img/cmyk/Yellow3.png'),
  prefixLink('/img/cmyk/Yellow4.png')
];

const blackImages = [
  prefixLink('/img/white.png'),
  prefixLink('/img/cmyk/Black1.png'),
  prefixLink('/img/cmyk/Black2.png'),
  prefixLink('/img/white.png')
];

const whiteImage = prefixLink('/img/white.png');

export default class InteractiveTitle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: null
    };

    this._handleMouseLeave = this._handleMouseLeave.bind(this);
    this._handleMouseEnter = this._handleMouseEnter.bind(this);
  }

  _handleMouseLeave(e) {
    e.preventDefault();
    this.setState({
      images: null
    });
  }

  _handleMouseEnter(e, images) {
    e.preventDefault();
    this.setState({
      images
    });
  }

  render() {
    return (
      <div className="interactive-title">
        <div
          className={
            classNames('flip__container', {
              hover: !!this.state.images
            })
          }
          onMouseOver={
            (e) => {
              this._handleMouseEnter(e, cyanImages);
            }
          }
          onMouseOut={
            (e) => {
              this._handleMouseLeave(e);
            }
          }
        >
          <div className="flipper">
            <div className="img__container front">
              <img src={prefixLink('/img/cmyk/Cyan5.png')} alt="" />
            </div>
            <div className="img__container back">
              <img
                src={this.state.images ? this.state.images[0] : whiteImage}
                alt=""
              />
            </div>
          </div>
        </div>
        <div
          className={
            classNames('flip__container', {
              hover: !!this.state.images
            })
          }
          onMouseOver={
            (e) => {
              this._handleMouseEnter(e, magentaImages);
            }
          }
          onMouseOut={
            (e) => {
              this._handleMouseLeave(e);
            }
          }
        >
          <div className="flipper flipper1">
            <div className="img__container front">
              <img src={prefixLink('/img/cmyk/Magenta5.png')} alt="" />
            </div>
            <div className="img__container back">
              <img src={this.state.images ? this.state.images[1] : whiteImage} alt="" />
            </div>
          </div>
        </div>
        <div
          className={
            classNames('flip__container', {
              hover: !!this.state.images
            })
          }
          onMouseOver={
            (e) => {
              this._handleMouseEnter(e, yellowImages);
            }
          }
          onMouseOut={
            (e) => {
              this._handleMouseLeave(e);
            }
          }
        >
          <div className="flipper flipper2">
            <div className="img__container front">
              <img src={prefixLink('/img/cmyk/Yellow5.png')} alt="" />
            </div>
            <div className="img__container back">
              <img src={this.state.images ? this.state.images[2] : whiteImage} alt="" />
            </div>
          </div>
        </div>
        <div
          className={
            classNames('flip__container', {
              hover: !!this.state.images
            })
          }
          onMouseOver={
            (e) => {
              this._handleMouseEnter(e, blackImages);
            }
          }
          onMouseOut={
            (e) => {
              this._handleMouseLeave(e);
            }
          }
        >
          <div className="flipper flipper3">
            <div className="img__container front">
              <img src={prefixLink('/img/cmyk/Black3.png')} alt="" />
            </div>
            <div className="img__container back">
              <img src={this.state.images ? this.state.images[3] : whiteImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

