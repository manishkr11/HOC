import React from 'react';
import './App.css';
import WrappedComponent from './WrappedComponent'
import MyTittleUsingHoc from './MyTitleUsingHoc'

function App() {
  return (
    <div>
      <h3 style={{textAlign:"center"}}>hello world</h3>
      <WrappedComponent />
      <MyTittleUsingHoc />
    </div>
  );
}

export default App;
