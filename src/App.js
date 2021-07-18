import React from 'react';
// import ReadOnlyCount from './components/example/ReadOnlyCount';
// import ReadWriteCount from './components/example/ReadWriteCount';
import './App.css';
// import SelectorCount from './components/example/SelectorCount';
// import RecoilStarCount from './components/example/RecoilStarCount';
import DelayCount from './components/example/DelayCount';


function App() {
  return (
    <div className="App">
        atom 예시
        <>
          {/* <ReadWriteCount />
          <ReadOnlyCount />
          <SelectorCount />
          <RecoilStarCount /> */}
          <DelayCount />
        </>
    </div>
  );
}

export default App;