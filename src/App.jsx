import React from 'react'
import { useState } from 'react'
import Home from './components/Home';
import Step1 from './components/Step1';
import ProgressBar from './components/progressBar';
import Step2 from "./components/Step2";
import { validateStep1, validateStep2, validateStep3 } from './utils/validations';
import Step3 from './components/Step3';
import Step4 from './components/Step4';

function App() {
    const [showStep, setShowStep] = useState(0);

    const [formData, setFormData] = useState({
        foundation: {
            businessName: "",
            missionStatement: "",
            promise: "",
        },
        perception: {
            message: "",
            voice: "",
            ItFactor: "",
        },
        connection: {
            age: "",
            genderMale: "",
            genderFemale: "",
            ethnicity: "Select",
        }
    });
    const [formPrompts, setFormPrompts] = useState({
        foundation: {
            businessName: "What is the name of the brand being built?",
            missionStatement: "_(Brand's name)_'s mission is to _(why you do what you do)_.",
            promise: "We promise our _(users)_ that we will _(unbreakable promise)_."
        },
        perception: {
            message: "_(brand name)_ users should know that we offer _(offering and problem it solves)_",
            voice: "_(brand name)_ speaks with a _(specific vocal traits used by your audience)_ voice",
            ItFactor: 'Our _(unique character or behavorial traits)_ is our "It FACTOR"'
        },
        connection: {
            age: "What is the average age of your users?",
            gender: "What percentage of your users are Male or Female?",
            ethnicity: "What is the average ethnicity of your users?"
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
            ItFactor: "",
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
                ItFactor: "",
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
                ItFactor: "",
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

        if (showStep === 2) {
            const isValid = validateStep2(formData.perception, setErrors)
            if (isValid) {
                console.log(formData.perception);
                setShowStep(3);
            }
        }

        if (showStep === 3) {
            const isValid = validateStep3(formData.connection, setErrors)
            if (isValid) {
                console.log(formData.connection);
                setShowStep(4);
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
                    <Step1
                        data={formData.foundation}
                        prompts={formPrompts.foundation}
                        changeFunc={handleInputChange}
                        errors={errors.foundation}
                    />
                    <button onClick={handleExitForm}>Exit</button>
                    <button onClick={handleNextStep}>Next</button>
                </>
            )}
            {showStep === 2 && (
                <>
                    <ProgressBar step={showStep} />
                    <Step2
                        data={formData.perception}
                        prompts={formPrompts.perception}
                        changeFunc={handleInputChange}
                        errors={errors.perception}
                    />
                    <button onClick={handleExitForm}>Exit</button>
                    <button onClick={handleNextStep}>Next</button>
                </>
            )}
            {showStep === 3 && (
                <>
                    <ProgressBar step={showStep} />
                    <Step3
                        data={formData.connection}
                        prompts={formPrompts.connection}
                        changeFunc={handleInputChange}
                        errors={errors.connection}
                    />
                    <button onClick={handleExitForm}>Exit</button>
                    <button onClick={handleNextStep}>Next</button>
                </>
            )}
            {showStep === 4 && (
                <>
                    <ProgressBar step={showStep} />
                    <Step4
                        data={formData}
                    />
                    <button onClick={handleExitForm}>Exit</button>
                    <button onClick={handleNextStep}>Next</button>
                </>
            )}

        </div>
    )
}

export default App
