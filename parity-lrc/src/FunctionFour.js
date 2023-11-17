import React, { useState } from 'react'

function FunctionFour() {
    const [componentCount, setComponentCount] = useState(1);
    const [bitInputs, setBitInputs] = useState(Array(componentCount).fill(''));
    const [bccOutput, setBccOutput] = useState('');
    const [evenSetParityBit, setEvenSetParityBit] = useState('');
    const [oddSetParityBit, setOddSetParityBit] = useState('');
    const [bccEvenParityBit, setBccEvenParityBit] = useState('');
    const [bccOddParityBit, setBccOddParityBit] = useState('');

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

    const getOutput = () => {
        if (bitInputs.every((input) => input.length === bitInputs[0].length)) {
            const bcc = bitInputs[0]
                .split('')
                .map((_, colIndex) =>
                    bitInputs.reduce((acc, row) => acc + parseInt(row[colIndex], 10), 0) % 2
                )
                .join('');

            setBccOutput(bcc);

            const evenParityBits = bitInputs.map((input) => input.split('').reduce((acc, bit) => acc + parseInt(bit, 10), 0) % 2);
            setEvenSetParityBit(evenParityBits.join(''));

            const oddParityBits = evenParityBits.map((bit) => (bit + 1) % 2);
            setOddSetParityBit(oddParityBits.join(''));

            const countEvenOnes = evenParityBits.filter((bit) => bit === 1).length;
            const bccEvenParityBit = countEvenOnes % 2 === 0 ? '0' : '1';
            setBccEvenParityBit(bccEvenParityBit);

            const countOddOnes = oddParityBits.filter((bit) => bit === 1).length;
            const bccOddParityBit = countOddOnes % 2 === 1 ? '0' : '1';
            setBccOddParityBit(bccOddParityBit);
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
            <button type="button" className="btn btn-success w-100" onClick={getOutput}>Get Output</button>
            <div className='w-100 d-flex flex-column align-items-start justify-content-center gap-2'>
                <b>BCC:</b>
                <input type="text" className='form-control w-100' style={{ backgroundColor: "#ebbc1f", border: "none" }} value={bccOutput} readOnly />
                <b>EVEN-set parity bit:</b>
                <input type="text" className='form-control w-100' style={{ backgroundColor: "#ebbc1f", border: "none" }} value={evenSetParityBit} readOnly />
                <b>ODD-set parity bit:</b>
                <input type="text" className='form-control w-100' style={{ backgroundColor: "#ebbc1f", border: "none" }} value={oddSetParityBit} readOnly />
                <b>BCC EVEN-set parity bit:</b>
                <input type="text" className='form-control w-100' style={{ backgroundColor: "#ebbc1f", border: "none" }} value={bccEvenParityBit} readOnly />
                <b>BCC ODD-set parity bit:</b>
                <input type="text" className='form-control w-100' style={{ backgroundColor: "#ebbc1f", border: "none" }} value={bccOddParityBit} readOnly />
            </div>
        </div>
    )
}

export default FunctionFour