import React, { useState } from 'react'

function FunctionTwo() {
    const [componentCount, setComponentCount] = useState(1);
    const [bitInputs, setBitInputs] = useState(Array(componentCount).fill(''));
    const [bccOutput, setBccOutput] = useState('');

    const handleIncrement = () => {
        setComponentCount(componentCount + 1);
        setBitInputs([...bitInputs, '']);
    };

    const handleDecrement = () => {
        if (componentCount > 1) {
            setComponentCount(componentCount - 1);
            setBitInputs(bitInputs.slice(0, -1));
        }
    };

    const handleBitInputChange = (e, index) => {
        const inputValue = e.target.value;
        if (/^[01]*$/.test(inputValue)) {
            const updatedBitInputs = [...bitInputs];
            updatedBitInputs[index] = inputValue;
            setBitInputs(updatedBitInputs);
        }
    };

    const renderComponents = () => {
        return bitInputs.map((bitInput, index) => (
            <div key={index} className='w-100 d-flex flex-row align-items-center justify-content-center gap-2'>
                <input
                    type="text"
                    className='form-control w-100'
                    style={{ backgroundColor: "#ebbc1f", border: "none" }}
                    value={bitInput}
                    onChange={(e) => handleBitInputChange(e, index)}
                />
                <button type="button" className='btn p-0' onClick={handleIncrement}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#198754" className="bi bi-plus-square-fill" viewBox="0 0 16 16">
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
                    </svg>
                </button>
                <button type="button" className='btn p-0' onClick={handleDecrement}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#dc3545" className="bi bi-dash-square-fill" viewBox="0 0 16 16">
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm2.5 7.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1z" />
                    </svg>
                </button>
            </div>
        ));
    };

    const calculateBCC = () => {
        if (bitInputs.every((input) => input.length === bitInputs[0].length)) {
            const bcc = bitInputs[0]
                .split('')
                .map((_, colIndex) =>
                    bitInputs.reduce((acc, row) => acc + parseInt(row[colIndex], 10), 0) % 2
                )
                .join('');

            setBccOutput(bcc);
        } else {
            alert('All bit inputs should be equal in length.');
        }
    };

    return (
        <div className='w-100 d-flex flex-column align-items-center justify-content-center gap-2'>
            <div className='w-100 d-flex flex-column align-items-start justify-content-center gap-2'>
                <b>Input bit:</b>
                {renderComponents()}
            </div>
            <button type="button" className="btn btn-success w-100" onClick={calculateBCC}>Calculate BCC</button>
            <div className='w-100 d-flex flex-column align-items-start justify-content-center gap-2'>
                <b>Output:</b>
                <input type="text" className='form-control w-100' style={{ backgroundColor: "#ebbc1f", border: "none" }} value={bccOutput} readOnly />
            </div>
        </div>
    )
}

export default FunctionTwo