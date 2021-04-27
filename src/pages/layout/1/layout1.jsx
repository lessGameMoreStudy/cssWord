import React from 'react';
import './layout1.scss';
import Title from '@/components/title/title.jsx';
import Tips from '@/components/tips/tips.jsx';

class Layout1 extends React.Component {
  render() {
    return (
      <div className="layout layout1">
        <Title title="布局方式"></Title>
        <div className="container">
          <div className="type">
            <div className="layout1">
              <header></header>
              <main>
                <div className="test tc">1</div>
                <div className="test tr">2</div>
                <div className="test tl">3</div>
                <div className="test tc">4</div>
              </main>
              <footer></footer>
            </div>
            <Tips text="position+left+right+top+bottom"></Tips>
          </div>
          <div className="type">
            <div className="layout2">
              <header></header>
              <main>
                <div className="test tc">1</div>
                <div className="test tr">2</div>
                <div className="test tl">3</div>
                <div className="test tc">4</div>
              </main>
              <footer></footer>
            </div>
            <Tips text="flex"></Tips>
          </div>
          <div className="type">
            <div className="layout3">
              <div className="left"></div>
              <div className="right"></div>
            </div>
            <Tips text="margin-left+float:left"></Tips>
          </div>
          <div className="type">
            <div className="layout4">
              <div className="left"></div>
              <div className="right"></div>
            </div>
            <Tips text="float:left+overflow"></Tips>
          </div>
          <div className="type">
            <div className="layout5">
              <div className="left"></div>
              <div className="right"></div>
            </div>
            <Tips text="flex"></Tips>
          </div>
          <div className="type">
            <div className="layout6">
              <div className="left"></div>
              <div className="center"></div>
              <div className="right"></div>
            </div>
            <Tips text="float:left+overflow"></Tips>
          </div>
          <div className="type">
            <div className="layout7">
              <div className="left"></div>
              <div className="center"></div>
              <div className="right"></div>
            </div>
            <Tips text="flex"></Tips>
          </div>
          <div className="type">
            <div className="layout8">
              <div className="left"></div>
              <div className="right"></div>
              <div className="center">
                <div>pasdasd</div>
              </div>
            </div>
            <Tips text="float:left+margin-left/right: -60px"></Tips>
          </div>
        </div>
      </div>
    )
  }
}

export default Layout1;