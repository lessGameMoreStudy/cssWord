import React from 'react';
import './title.scss';
import Tips from '../tips/tips.jsx';

class Title extends React.Component {
  render() {
    return (
      <div className="title">
        <Tips text={this.props.title}></Tips>
      </div>
    )
  }
}

export default Title;