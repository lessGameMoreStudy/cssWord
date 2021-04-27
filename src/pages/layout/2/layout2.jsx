import React from 'react';
import './layout2.scss';
import Title from '@/components/title/title.jsx';
import Tips from '@/components/tips/tips.jsx';
import { qingwa } from '@/common/imgManager/exportImg';

class Layout2 extends React.Component {
  render() {
    return (
      <div className="layout layout2">
        <Title title="居中+文字环绕"></Title>
        <div className="container">
          <div className="be-center">
            <div className="type">
              <div className="center center1">
                <div className="child"></div>
              </div>
              <Tips text="display: inline-block"></Tips>
            </div>
            <div className="type">
              <div className="center center2">
                <div className="child"></div>
              </div>
              <Tips text="display: table-cell"></Tips>
            </div>
            <div className="type">
              <div className="center center3">
                <div className="child"></div>
              </div>
              <Tips text="position+margin"></Tips>
            </div>
            <div className="type">
              <div className="center center4">
                <div className="child"></div>
              </div>
              <Tips text="position+transform"></Tips>
            </div>
            <div className="type">
              <div className="center center5">
                <div className="child"></div>
              </div>
              <Tips text="flex"></Tips>
            </div>
          </div>
          <div className="warping">
            <div className="text-warping">
              <img src={qingwa} alt="qingwa" draggable="false"/>
              <p>texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
              texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
              texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextt</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Layout2;