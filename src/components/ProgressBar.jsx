import React from 'react'

function ProgressBar({ step }) {
    return (
        <div
            style={{
                height: "10px",
                width: "300px",
                border: "2px solid #000",
                marginBottom: "50px"
            }}
        >
            {step === 1 && (
                <p>Step {step} of 4</p>
            )}
            {step === 2 && (
                <p>Step {step} of 4</p>
            )}
            {step === 3 && (
                <p>Step {step} of 4</p>
            )}
            {step === 4 && (
                <p>Step {step} of 4</p>
            )}
        </div>
    )
}

export default ProgressBar
