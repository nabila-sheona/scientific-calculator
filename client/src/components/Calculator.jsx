// src/components/Calculator.jsx
import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
    const [display, setDisplay] = useState('');
    const [lastButtonClicked, setLastButtonClicked] = useState('');

    const handleButtonClick = (value) => {
        if (value === '=') {
            try {
                // Replace symbolic representations with actual JS functions for evaluation
                let expression = display
                    .replace(/√/g, 'Math.sqrt')
                    .replace(/log\(/g, 'Math.log10(')
                    .replace(/ln\(/g, 'Math.log(')
                    .replace(/sin\(/g, 'Math.sin(')
                    .replace(/cos\(/g, 'Math.cos(')
                    .replace(/tan\(/g, 'Math.tan(');

                setDisplay(eval(expression).toString());
            } catch {
                setDisplay('Error');
            }
        } else if (value === 'AC') {
            setDisplay('');
        } else if (value === 'sin' || value === 'cos' || value === 'tan') {
            setDisplay(`${value}(`);
        } else if (value === 'log') {
            setDisplay('log(');
        } else if (value === 'ln') {
            setDisplay('ln(');
        } else if (value === 'sqrt') {
            setDisplay('√(');
        } else if (value === 'exp') {
            setDisplay('exp(');
        } else if (value === '^') {
            setDisplay(display + '**');
        } else if (value === 'x|y') {
            setDisplay(display + '/');
        } else if (value === '+/-') {
            // Toggle sign of the current display value
            if (display.charAt(0) === '-') {
                setDisplay(display.slice(1)); // Remove negative sign
            } else {
                setDisplay('-' + display); // Add negative sign
            }
        } else {
            // Clear display and start with new number after '='
            if (lastButtonClicked === '=') {
                setDisplay(value);
            } else {
                setDisplay(display + value);
            }
        }

        // Update last button clicked
        setLastButtonClicked(value);
    };

    const buttons = [
        '7', '8', '9', '/', 'AC',
        '4', '5', '6', '*', 'sqrt',
        '1', '2', '3', '-', '^',
        '0', '.', '=', '+', 'log',
        'sin', 'cos', 'tan', '(', ')',
        'ln', 'exp', 'x|y', '+/-'
    ];

    return (
        <div className="calculator">
            <div className="display">{display}</div>
            <div className="buttons">
                {buttons.map((btn) => (
                    <button key={btn} onClick={() => handleButtonClick(btn)}>
                        {btn}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Calculator;
