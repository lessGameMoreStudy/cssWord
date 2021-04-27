import React from 'react';
import './textEllipsis.scss';
import Title from '@/components/title/title.jsx';
import Tips from '@/components/tips/tips.jsx';

class Ellipsis extends React.Component {
  render() {
    return (
      <div className="layout ellipsis">
        <Title title="文字溢出"></Title>
        <div className="container">
          <div className="single">
            <div className="text-body">
              <p>层叠样式表(英文全称：Cascading Style Sheets)是一种用来表现HTML（标准通用标记语言的一个应用）或XML（标准通用标记语言的一个子集）等文件样式的计算机语言。CSS不仅可以静态地修饰网页，还可以配合各种脚本语言动态地对网页各元素进行格式化。</p>
            </div>
            <Tips text="单行文本溢出"></Tips>
          </div>
          <div className="much">
            <div className="text-body">
              <p>层叠样式表(英文全称：Cascading Style Sheets)是一种用来表现HTML（标准通用标记语言的一个应用）或XML（标准通用标记语言的一个子集）等文件样式的计算机语言。CSS不仅可以静态地修饰网页，还可以配合各种脚本语言动态地对网页各元素进行格式化。</p>
            </div>
            <Tips text="多行文本溢出"></Tips>
          </div>
        </div>
      </div>
    )
  }
}

export default Ellipsis;