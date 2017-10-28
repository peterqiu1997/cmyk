import React, { Component } from 'react';
import { Fade } from 'react-reveal';
import pink_card from '../assets/pink_card.png';
import green_card from '../assets/green_card.png';

class Schedule extends Component {
  render() {
    return (
      <div className="schedule">
          <div className="weekend one">
            <span className="title"> <img src={pink_card} /> Week One <span className="date">10/14</span> </span>
            <Fade up wave tag="ul">
            <li><div className="time">11:00</div><div className="description">Intro to Illustrator<br/>Jackie Zou</div></li>
            <li><div className="time">12:00</div><div className="description">Low Poly Art<br/>Mei Mei</div></li>
            <li><div className="time">1:00</div><div className="description">UI/UX Portfolio Building<br/>Julie Wong</div></li>
            <li><div className="time">2:00</div><div className="description">Intro to InDesign<br/>Roya Chagnon</div></li>
            <li><div className="time">3:00</div><div className="description">Hand Lettering<br/>Kiana Aryan & Jessie Nguyen</div></li>
            </Fade>
          </div>
          <div className="weekend two">
            <span className="title"> <img src={green_card} /> Week Two <span className="date">10/21</span> </span>
            <Fade up wave tag="ul">
            <li><span className="time">11:00</span><span className="description">Intro to Lightroom<br/>Jackie Xu</span></li>
            <li><span className="time">12:00</span><span className="description">Intro to Film Photography<br/>Nicholas Chiu</span></li>
            <li><span className="time">1:00</span><span className="description">Bullet Journaling<br/>Vivian Tiet</span></li>
            <li><span className="time">2:00</span><span className="description">HTML/CSS<br/>Holly Luo & Erik Yang</span></li>
            <li><span className="time">3:00</span><span className="description">Designing Your Logo & Brand<br/>David Xie</span></li>
            </Fade>
          </div>
          <div className="weekend three">
            <span className="title"> <img src={pink_card} /> Week Three <span className="date">10/28</span> </span>
            <Fade up wave tag="ul">
            <li><span className="time">11:00</span><span className="description">Prototyping UIs with Origami<br/>David Bui</span></li>
            <li><span className="time">12:00</span><span className="description">Web Game Design<br/>Ethan Lee</span></li>
            <li><span className="time">1:00</span><span className="description">Astrophotography<br/>Andrew Chang</span></li>
            <li><span className="time">2:00</span><span className="description">UI/UX Basic Design Principles<br/>Crystal Chang</span></li>
            <li><span className="time">3:00</span><span className="description">Interactive Web Design<br/>Ellen Hong</span></li>
            </Fade>
          </div>
      </div>
    );
  }
}

export default Schedule;
