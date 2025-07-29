export const validateStep1 = (data, setErrors) => {
    const newErrors = {};

    if (data.businessName.length <= 1) {
        newErrors.businessName = "Business name is too short."
    };

    if (data.missionStatement.length < 10) {
        newErrors.missionStatement = "You need to have a longer mission statement."
    }

    if (data.promise.length < 10) {
        newErrors.promise = "Your promise is a lie."
    }

    setErrors(prevErrors => ({
        ...prevErrors,
        foundation: {
            ...prevErrors.foundation,
            ...newErrors
        }
    }))

    return Object.keys(newErrors).length === 0
}


export const validateStep2 = (data, setErrors) => {
    const newErrors = {};

    if (data.message.length <= 10) {
        newErrors.message = "Message is too shoirt"
    };

    if (data.voice.length < 10) {
        newErrors.voice = "I can't here your voice"
    }

    if (data.ItFactor.length < 10) {
        newErrors.ItFactor = "No It Factor huh?"
    }

    setErrors(prevErrors => ({
        ...prevErrors,
        perception: {
            ...prevErrors.perception,
            ...newErrors
        }
    }))

    return Object.keys(newErrors).length === 0
}


export const validateStep3 = (data, setErrors) => {
    const newErrors = {};


    const age = Number(data.age);
    const maleAge = Number(data.genderMale);
    const femaleAge = Number(data.genderFemale);

    if (age <= 1) {
        newErrors.age = "Your users are under 1 year old?"
    }

    if ((maleAge + femaleAge) > 100 || maleAge === 0 && femaleAge === 0) {
        newErrors.genderFemale = "Your percentages can't equal over 100% and you can't leave both at 0"
    }

    if (data.ethnicity === "Select") {
        newErrors.ethnicity = "Please select one"
    }

    setErrors(prevErrors => ({
        ...prevErrors,
        connection: {
            ...prevErrors.connection,
            ...newErrors
        }
    }))

    return Object.keys(newErrors).length === 0;
}