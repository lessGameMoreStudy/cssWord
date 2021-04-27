import React from 'react';
import './tips.scss';

class Tips extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="tips tac mg-center">{this.props.text}</div>
    )
  }
}

export default Tips;