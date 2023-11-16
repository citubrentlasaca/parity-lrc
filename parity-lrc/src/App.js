import React, { useState } from 'react'
import FunctionOne from './FunctionOne';
import FunctionTwo from './FunctionTwo';
import FunctionThree from './FunctionThree';
import FunctionFour from './FunctionFour';

function App() {
  const [functionNumber, setFunctionNumber] = useState('1');

  const handleFunctionNumberChange = (e) => {
    setFunctionNumber(e.target.value);
  }

  return (
    <div className='vw-100 vh-100 d-flex align-items-center justify-content-center'
      style={{
        backgroundColor: '#72c2e9',
      }}
    >
      <div className='w-100 h-50 d-flex align-items-center justify-content-center gap-2'>
        <div className='w-25 d-flex flex-column align-items-center justify-content-center gap-2'>
          <select className="form-select" style={{ backgroundColor: "#ebbc1f", border: "none" }} value={functionNumber} onChange={handleFunctionNumberChange}>
            <option value="1">Function One</option>
            <option value="2">Function Two</option>
            <option value="3">Function Three</option>
            <option value="4">Function Four</option>
          </select>
          {functionNumber === '1' && (
            <FunctionOne />
          )}
          {functionNumber === '2' && (
            <FunctionTwo />
          )}
          {functionNumber === '3' && (
            <FunctionThree />
          )}
          {functionNumber === '4' && (
            <FunctionFour />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
