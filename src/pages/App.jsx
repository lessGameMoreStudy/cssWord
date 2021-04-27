import React from 'react';
import '@/assets/css/reset.scss';
import '@/assets/css/common.scss';
import './App.scss';
import Layout1 from './layout/1/layout1.jsx';
import Layout2 from './layout/2/layout2.jsx';
import Ellipsis from './layout/3/textEllipsis.jsx';
import CssFunction from './layout/4/cssFunction.jsx';
import CssVariable from './layout/5/cssVariable.jsx';
import Loading from './layout/loading/loading.jsx';

function App() {
  return (
    <div>
      <Layout1></Layout1>
      <Layout2></Layout2>
      <Ellipsis></Ellipsis>
      <CssFunction></CssFunction>
      <CssVariable></CssVariable>
      <Loading></Loading>
    </div>
  )
}

export default App;