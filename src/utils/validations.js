export default validateStep1 = ({ data, setErrors }) => {
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