import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Mail from './component/Mail';
import Hello from './component/Hello';
import Condition from './component/Condition';
import Input from './component/Input';
import Counter from './component/Counter';
import Content from './component/Content';

function App() {
  return (
    <>
      <Header />
      <Content />
      <Mail name="아무개" text="본문내용"/>
      <Hello name="준성" friend="현민" one="1"/>
      <Condition isOn = {true}/>
      <Counter />
      <Input />
      <Footer />
    </>
  );
}

export default App;
