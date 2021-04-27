import React from 'react';
import './loading.scss';
import Title from '@/components/title/title.jsx';

class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      c1List: [1,2,3,4,5,6,7,8,9,10,11,12]
    }
  }

  render() {
    return (
      <div className="layout loading-all">
        <Title title="loading"></Title>
        <div className="container">
          <div className="circle1">
            {
              this.state.c1List.map((val, index) => {
                return (
                  <div key={index} style={{ '--list-index': `${val}`}}></div>
                )
              })
            }
          </div>
          <div className="spinner"></div>
        </div>
      </div>
    )
  }
}

export default Loading;