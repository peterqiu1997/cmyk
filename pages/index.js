import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Scroll, { Link, Element, Events, animateScroll, scrollSpy } from 'react-scroll';
import classNames from 'classnames';
import { config } from 'config';
import { prefixLink } from 'gatsby-helpers';

import _ from 'lodash';

import InteractiveTitle from '../components/InteractiveTitle';

const speakers = [
  {
    name: 'Ayan Daniels',
    url: '/img/speakers/ayan.jpg',
    portfolio: 'http://designayan.com/',
    title: 'Interaction Design at Google'
  },
  {
    name: 'Sahana Kumar',
    url: '/img/speakers/sahana.jpg',
    portfolio: 'http://sahanakumar.com/',
    title: 'Interaction Design at Frog'
  },
  {
    name: 'Benjamin Zweig',
    url: '/img/speakers/benjamin.jpg',
    portfolio: 'http://zweig.co/',
    title: 'UX Design at Twitch'
  },
  {
    name: 'Travis Neilson',
    url: '/img/speakers/travis.jpeg',
    portfolio: 'http://travisneilson.com/',
    title: 'Web Design Youtuber at Google'
  },
  {
    name: 'Fiona Yeung',
    url: '/img/speakers/fiona.jpg',
    portfolio: 'http://www.fionayeung.com/',
    title: 'Material Design at Google'
  },
  {
    name: 'Andre Tacuyan',
    url: '/img/speakers/andre.jpg',
    portfolio: 'http://www.andretacuyan.com/',
    title: 'Design at Playground'
  },
  {
    name: 'Anna Smalley',
    url: '/img/speakers/anna.jpg',
    portfolio: '',
    title: 'Senior UX Director at Walmart Labs'
  }
];

const schedule = [
  {
    time: '8:30AM',
    name: 'Doors Open',
    info: 'Good morning!  We will be having team forming activities and light breakfast will be served!'
  },
  {
    time: '9:00AM',
    name: 'Speaker Presentations',
    info: 'We\'ll kick off the event with a series of talks from industry professionals, who will share their own stories about design.'
  },
  {
    time: '11:00AM',
    name: 'Competition Kickoff',
    info: 'The Big Reveal: Games of Berkeley reveals this year\'s prompts'
  },
  {
    time: '11:30AM',
    name: 'Workshops',
    info: 'Two optional workshops, Design Sprints and Intro to Illustrator will be going on at this time.'
  },
  {
    time: '12:30PM',
    name: 'Workshops',
    info: 'Two optional workshops, Design Empathy and How to Freelance will be going on at this time.'
  },
  {
    time: '1:00PM',
    name: 'Lunch',
    info: 'Free lunch will be provided.'
  },
  {
    time: '2:30PM',
    name: 'Midpoint Feedback Sessions',
    info: 'Teams receive feedback from the mentors!'
  },
  {
    time: '5:00PM',
    name: 'Presentations',
    info: 'Give a quick pitch of your campaign to the judges.'
  },
  {
    time: '6:00PM',
    name: 'Closing Ceremony',
    info: 'Give yourself a pat on the back, you made it!'
  }
];

const speakerElements = _.map(speakers, (speaker, index) => {
  return (
    <div
      key={ `speakerElem-${index}` }
      className={ classNames('speaker', `speakerElem-${index}`) }
    >
      <a
        className="speaker__portfolio"
        href={ speaker.portfolio ? prefixLink(speaker.portfolio) : '' }
      >
        <div
          className="speaker__photo"
          style={{
            backgroundImage: `url(${prefixLink(speaker.url)})`
          }}
        >
        </div>
        <div className="speaker__details">
          <div className="speaker__details--name">
            { speaker.name }
          </div>
          <div className="speaker__details--title">
            { speaker.title }
          </div>
        </div>
      </a>
    </div>
  );
});

const scheduleElements = _.map(schedule, (event, index) => {
  return (
    <div
      key={ `eventElem-${index}` }
      className="event"
    >
      <div className="event__time">
        { event.time }
      </div>
      <div className="event__description">
        <b className="event__title">
          { event.name }
        </b>
        <br/>
        { event.info}
      </div>
    </div>
  );
});

export default class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      backgroundClass: 'background__color',
      textColor: 'dark'
    };
  }

  componentDidMount() {
    scrollSpy.update();
  }

  _handleSetActive(section) {
    switch(section) {
      case 'home':
        this.setState({
          backgroundClass: 'background__color',
          textColor: 'dark'
        });
        break;
      case 'about':
        this.setState({
          backgroundClass: 'background__color background__color--cyan',
          textColor: 'light'
        });
        break;
      case 'schedule':
        this.setState({
          backgroundClass: 'background__color background__color--magenta',
          textColor: 'light'
        });
        break;
      case 'registration':
        this.setState({
          backgroundClass: 'background__color background__color--yellow',
          textColor: 'dark'
        });
        break;
      case 'competition':
        this.setState({
          backgroundClass: 'background__color background__color--black',
          textColor: 'light'
        });
        break;
      default:
        console.log('No Section')
    }
  }

  render () {
    return (
      <div
        className={this.state.backgroundClass}
      >
        <Helmet
          title={config.siteTitle}
        />
        <Element
          className={classNames('section', 'section--home', {
            'section__text--light': this.state.textColor === 'light'
          })}
          name="home"
        >
          <InteractiveTitle />
          <div className="navigation">
            <Link
              style={{
                display: 'none'
              }}
              to="home"
              spy={true}
              isDynamic={true}
              onSetActive={() => {
                this._handleSetActive('home');
              }}
            />
            <Link
              id="about"
              className="nav__item"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              isDynamic={true}
              offset={-64}
              onSetActive={() => {
                this._handleSetActive('about');
              }}
            >
              about
            </Link>
            <Link
              id="schedule"
              className="nav__item"
              to="schedule"
              spy={true}
              smooth={true}
              duration={500}
              isDynamic={true}
              offset={-64}
              onSetActive={() => {
                this._handleSetActive('schedule');
              }}
            >
              schedule
            </Link>
            <Link
              id="registration"
              className="nav__item"
              to="registration"
              spy={true}
              smooth={true}
              duration={500}
              isDynamic={true}
              offset={-64}
              onSetActive={() => {
                this._handleSetActive('registration');
              }}
            >
              registration
            </Link>
            <Link
              id="competition"
              className="nav__item"
              to="competition"
              spy={true}
              smooth={true}
              duration={500}
              isDynamic={true}
              offset={-64}
              onSetActive={() => {
                this._handleSetActive('competition');
              }}
            >
              competition
            </Link>
          </div>
        </Element>
        <Element
          className={classNames('section', 'section--about', {
            'section__text--light': this.state.textColor === 'light'
          })}
          name="about"
        >
          <div className="section__title">
            about
          </div>
          <div className="section__title--sub">
            what is cmyk?
          </div>
          <div className="section--sub">
            <b className="cyan">C</b>ome <b className="magenta">M</b>ake <b className="yellow">Y</b>our mar<b className="black">K</b> at Innovative Design's 5th annual CMYK Designathon!

            Join us on Saturday, November 5th for a day of learning and
            exciting competition with peers and professional designers, where you
            will get the chance to work with a team to transform the brand of
            a local business - Games of Berkeley!  Professional designers who work with
            Google, Frog, Twitch, Playground and Walmart Labs will be there
            to judge entries, give feedback, and share invaluable wisdom about design.

            The event will be hosted at Berkeley's brand new Jacobs Hall for Design Innovation.
            Breakfast and lunch will be provided.  Get ready for a day of exploring and letting your
            creativy run wild!
          </div>
          <div className="section__title--sub">
            who will be there?
          </div>
          <div className="section--sub">
            { speakerElements }
          </div>
        </Element>
        <Element
          className={classNames('section', 'section--schedule', {
            'section__text--light': this.state.textColor === 'light'
          })}
          name="schedule"
        >
          <div className="section__title">
            schedule
          </div>
          <div className="section--sub">
            { scheduleElements }
          </div>
        </Element>
        <Element
          className={classNames('section', 'section--registration', {
            'section__text--light': this.state.textColor === 'light'
          })}
          name="registration"
        >
          <div className="section__title">
            registration
          </div>
          <div className="section--sub">
            To register, <a href="https://www.eventbrite.com/e/cmyk-designathon-2016-tickets-2890728948" target="_blank">buy your tickets now!</a>  They will sell out, so act soon!
            <br/>
            Additionally, be sure to check out the <a href="https://www.facebook.com/events/1239658116091377/?notif_t=plan_user_associated&notif_id=1477593077272531">Facebook event</a> and click RSVP!
            <br/>
            Cal IDs are required for entry.
          </div>
        </Element>
        <Element
          className={classNames('section', 'section--competition', {
            'section__text--light': this.state.textColor === 'light'
          })}
          name="competition"
        >
          <div className="section__title">
            competition
          </div>
          <div className="section--sub">
            The prompt will be released here at the event!  See you there!

            <a href="http://innovativedesign.club">
              <div className="logo">
                <img src={ prefixLink('/img/innod.png') }/>
              </div>
            </a>
          </div>
        </Element>
      </div>
    );
  }
}

