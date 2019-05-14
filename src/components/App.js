import React from 'react';
import Header from './Header';
import Color from './Color';

export default function App() {
  const name = 'Fake';
  const rgb = {
    red: 200,
    green: 50,
    blue: 200
  };

  return (
    <>
      <Header />
      <Color name={name} hex="#000000" rgb={rgb} />
    </>
  );
}
