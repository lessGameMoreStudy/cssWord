import React from 'react';
import './cssVariable.scss';
import Title from '@/components/title/title.jsx';

class CssVariable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      color: ["#f66", "#66f", "#f90", "#09f"]
    }

    this.navClick = this.navClick.bind(this);
    this.trackMouseMove = this.trackMouseMove.bind(this);
  }

  render() {
    return (
      <div className="layout css-variable">
        <Title title="css变量"></Title>
        <div className="container">
          <div className="loading1">
            <ul>
              {
                [1,2,3,4,5,6].map((val, index) => {
                  return (
                    <li key={index} style={{ '--list-index': `${val}`}}></li>
                  )
                })
              }
            </ul>
            {/* <Tips text="替代animation-delay"></Tips> */}
          </div>
          <div className="loading2">
            <ul>
              {
                [1,2,3,4,5,6,7,8,9].map((val, index) => {
                  return (
                    <li key={index} style={{ '--list-index': `${val}`}} className={`li-${val}`}></li>
                  )
                })
              }
            </ul>
          </div>
          <div className="tag">
            <nav>
              {
                [1,2,3,4].map((val, index) => {
                  return (
                    <a 
                      key={index}
                      className={this.state.index === index ? 'active': ''}
                      onClick={() => this.navClick(index)}>{`标题${val}`}</a>
                  )
                })
              }
            </nav>
            <div className="tabs">
              <ul style={{'--tab-count': `${this.state.color.length}`}}>
                {
                  this.state.color.map((val, index) => {
                    return (
                      <li key={index} style={{'--bg-color': `${val}`}}>{`内容${index + 1}`}</li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
          <div className="track">
            <p onMouseMove={(e) => {this.trackMouseMove(e)}}>
              <span>CSS鼠标跟随变化</span>
            </p>
          </div>
        </div>
      </div>
    )
  }

  navClick(i) {
    this.setState({
      index: i
    })
    const tab = document.querySelector('.tabs').childNodes[0];
    tab.style.setProperty('--tab-index', i);
  }

  trackMouseMove(e) {
    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop;
    e.target.style.setProperty('--x', `${x}px`);
    e.target.style.setProperty('--y', `${y}px`);
  }
}

export default CssVariable;