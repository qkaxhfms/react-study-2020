import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Hello from './component/Hello';
import Condition from './component/Condition';
import Counter from './component/Counter';
import Content from './component/Content';

function App() {
  return (
    <>
      <Header />
      <Content />
      <Hello name="준성" friend="현민" one="1"/>
      <Condition isOn = {true}/>
      <Counter />
      <Footer />
    </>
  );
}

export default App;
