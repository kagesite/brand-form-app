import React from 'react'
import { useState } from 'react'
import Home from './components/Home';
import Step1 from './components/Step1';
import ProgressBar from './components/progressBar';

function App() {
    const [showStep, setShowStep] = useState(1);

    const [formData, setFormData] = useState({
        foundation: {
            businessName: "",
            missionStatement: "",
            promise: "",
        },
        perception: {
            message: "",
            voice: "",
            ITFactor: "",
        },
        connection: {
            age: "",
            genderMale: "",
            genderFemale: "",
            ethnicity: "",
        }
    });

    const [formPrompts, setFormPrompts] = useState({
        foundation: {
            businessName: "What is the name of the brand being built?",
            missionStatement: "__(Brand's name)___'s mission is to ___(why you do what you do)___.",
            promise: "We promise our ___(users)___ that we will ___(unbreakable promise)___."
        }
    })

    const [errors, setErrors] = useState({
        foundation: {
            businessName: "",
            missionStatement: "",
            promise: "",
        },
        perception: {
            message: "",
            voice: "",
            ITFactor: "",
        },
        connection: {
            age: "",
            genderMale: "",
            genderFemale: "",
            ethnicity: "",
        }
    })

    const handleInputChange = (section, field, value) => {
        setFormData({
            ...formData,
            [section]: {
                ...formData[section],
                [field]: value
            }
        });

        setErrors({
            ...errors,
            [section]: {
                ...errors[section],
                [field]: ""
            }
        });
    }

    const handleExitForm = () => {

        confirm("Are you sure you want to leave?")
        
        setFormData({
            foundation: {
                businessName: "",
                missionStatement: "",
                promise: "",
            },
            perception: {
                message: "",
                voice: "",
                ITFactor: "",
            },
            connection: {
                age: "",
                genderMale: "",
                genderFemale: "",
                ethnicity: "",
            }
        })

        setErrors({
            foundation: {
                businessName: "",
                missionStatement: "",
                promise: "",
            },
            perception: {
                message: "",
                voice: "",
                ITFactor: "",
            },
            connection: {
                age: "",
                genderMale: "",
                genderFemale: "",
                ethnicity: "",
            }
        })

        setShowStep(0)
    }


    return (
        <div>
            {showStep === 0 && (
                <Home
                    step={setShowStep}
                />
            )}

            {showStep > 0 && (
                <div>
                    <ProgressBar step={showStep} />
                    {showStep === 1} {
                        <>
                            <Step1
                                data={formData.foundation}
                                prompts={formPrompts.foundation}
                                changeFunc={handleInputChange}
                            />
                            <button onClick={handleExitForm}>Exit</button>
                            <button>Next</button>
                        </>
                    }
                </div>
            )}

        </div>
    )
}

export default App
