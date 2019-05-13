import React from 'react';
import Dog from './Dog';
import Header from './Header';

export default function App() {
  return (
    <>
      <Header />
      <Dog name="tim" age={1} weight="2 lbs" />
    </>
  );
}
