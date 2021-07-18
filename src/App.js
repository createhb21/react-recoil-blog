import React from 'react';
import ReadOnlyCount from './components/example/ReadOnlyCount';
import ReadWriteCount from './components/example/ReadWriteCount';
import './App.css';

function App() {
  return (
    <div className="App">
        atom 예시
        <>
          <ReadWriteCount />
          <ReadOnlyCount />
        </>
    </div>
  );
}

export default App;