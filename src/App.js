import React from 'react';
import ReadOnlyCount from './components/example/ReadOnlyCount';
import ReadWriteCount from './components/example/ReadWriteCount';
import './App.css';
import SelectorCount from './components/example/SelectorCount';

function App() {
  return (
    <div className="App">
        atom 예시
        <>
          <ReadWriteCount />
          <ReadOnlyCount />
          <SelectorCount />
        </>
    </div>
  );
}

export default App;