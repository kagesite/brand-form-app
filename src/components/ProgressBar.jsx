import React from 'react'

function ProgressBar({ step }) {
    // Calculate progress percentage
    const progressPercentage = (step / 4) * 100;

    return (
        <>
            <div
                style={{
                    height: "10px",
                    width: "300px",
                    border: "2px solid #000",
                    backgroundColor: "#f0f0f0", // Background for empty part
                    borderRadius: "5px",
                    overflow: "hidden"
                }}
            >
                <div
                    style={{
                        backgroundColor: "#0ec031",
                        width: `${progressPercentage}%`,
                        height: "100%", // Fill the full height
                        transition: "width 0.3s ease", // Smooth animation
                        borderRadius: "3px"
                    }}
                />
            </div>

            <p>Step {step} of 4</p>
        </>
    )
}

export default ProgressBar