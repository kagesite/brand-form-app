import React from 'react'
import { useState } from 'react'
import Home from './components/Home';
import Step1 from './components/Step1';
import ProgressBar from './components/progressBar';
import { validateStep1 } from '../../../simple-brand-form/src/utils/Validation';
import Step2 from "./components/Step2";

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

    const handleNextStep = () => {
        if (showStep === 1) {
            const isValid = validateStep1(formData.foundation, setErrors)
            if (isValid) {
                console.log(formData.foundation);
                setShowStep(2);
            }
        }
    }


    return (
        <div>
            {showStep === 0 && (
                <Home
                    step={setShowStep}
                />
            )}

            {showStep === 1 && (
                <>
                    <ProgressBar step={showStep} />
                    {showStep === 1} {
                        <>
                            <Step1
                                data={formData.foundation}
                                prompts={formPrompts.foundation}
                                changeFunc={handleInputChange}
                                errors={errors.foundation}
                            />
                            <button onClick={handleExitForm}>Exit</button>
                            <button onClick={handleNextStep}>Next</button>
                        </>
                    }
                </>
            )}
            {showStep === 2 && (
                <>
                    {showStep === 2} {
                        <>
                            <ProgressBar step={showStep} />
                            <Step2

                            />
                            <button onClick={handleExitForm}>Exit</button>
                            <button onClick={handleNextStep}>Next</button>
                        </>
                    }
                </>
            )}

        </div>
    )
}

export default App
