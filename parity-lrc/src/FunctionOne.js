import React, { useState } from 'react'

function FunctionOne() {
    const [parity, setParity] = useState('Even');
    const [bitInput, setBitInput] = useState('');
    const [bitOutput, setBitOutput] = useState('');

    const handleParityChange = (e) => {
        setParity(e.target.value);
    }

    const handleBitInputChange = (e) => {
        const inputValue = e.target.value;
        if (/^[01]*$/.test(inputValue)) {
            setBitInput(inputValue);
        }
    };

    const handleCheckClick = () => {
        const onesCount = (bitInput.match(/1/g) || []).length;
        if (parity === 'Even' && onesCount % 2 === 0) {
            setBitOutput('No Error');
        }
        else if (parity === 'Odd' && onesCount % 2 !== 0) {
            setBitOutput('No Error');
        }
        else {
            setBitOutput('Error');
        }
    };

    return (
        <div className='w-100 d-flex flex-column align-items-center justify-content-center gap-2'>
            <select className="form-select" style={{ backgroundColor: "#ebbc1f", border: "none" }} value={parity} onChange={handleParityChange}>
                <option value="Even">Even</option>
                <option value="Odd">Odd</option>
            </select>
            <div className='w-100 d-flex flex-column align-items-start justify-content-center gap-2'>
                <b>Input bit:</b>
                <input type="text" className='form-control w-100' value={bitInput} onChange={handleBitInputChange} style={{ backgroundColor: "#ebbc1f", border: "none" }} />
            </div>
            <button type="button" className="btn btn-success w-100" onClick={handleCheckClick}>Check</button>
            <div className='w-100 d-flex flex-column align-items-start justify-content-center gap-2'>
                <b>Output:</b>
                <input type="text" className='form-control w-100' style={{ backgroundColor: "#ebbc1f", border: "none" }} value={bitOutput} readOnly />
            </div>
        </div>
    )
}

export default FunctionOne