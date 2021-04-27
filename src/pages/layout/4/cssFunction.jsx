import React from 'react';
import './cssFunction.scss';
import Title from '@/components/title/title.jsx';
import Tips from '@/components/tips/tips.jsx';

class CssFunction extends React.Component {
  render() {
    return (
      <div className="layout css-func">
        <Title title="css函数"></Title>
        <div className="container">
          <div className="left">
            <div className="tac hover">
              <a className="hover-tips" data-name="tips">hover-tips</a>
            </div>
            <Tips text="使用attr( )填充content"></Tips>
          </div>
          <div className="center">
            <div className="counter">
              <ul>
                <li>
                  <input type="checkbox" id="kobe"/>
                  <label htmlFor="kobe">kobe</label>
                </li>
                <li>
                  <input type="checkbox" id="jordan"/>
                  <label htmlFor="jordan">jordan</label>
                </li>
                <li>
                  <input type="checkbox" id="wade"/>
                  <label htmlFor="wade">wade</label>
                </li>
              </ul>
              <p className="player" data-unit="个">球员：</p>
              <p className="wight" data-unit="%">占比：</p>
            </div>
            <Tips text="counter( )/counters( )"></Tips>
          </div>
          <div className="right">
            <ul className="figure">
              <li className="star"></li>
              <li className="ellipse"></li>
              <li className="cricle"></li>
              <li className="traingle"></li>
              <li className="rhombus"></li>
              <li className="message"></li>
              <li className="left-arrow"></li>
              <li className="right-arrow"></li>
            </ul>
            <Tips text="clip-path 绘画图形"></Tips>
          </div>
        </div>
      </div>
    )
  }
}

export default CssFunction;