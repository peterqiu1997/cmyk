import React, { Component } from 'react';

class Section extends Component {
  render() {
    return (
      <div className={this.props.classes}>
          {this.props.children}
      </div>
    );
  }
}

export default Section;
