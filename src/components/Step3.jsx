import React from 'react'
import "../styles/Form.css"

function Step3({ data, prompts, changeFunc, errors }) {
    const ethnicities = [
        "Select",
        "White",
        "Asian",
        "Black",
        "Polynesian",
        "Hispanic",
    ]

    return (
        <div>
            <form className='form-container'>
                <h2>Connection</h2>
                <div className='question-card'>
                    <label>User Age:</label>
                    <p className="prompt">{prompts.age}</p>
                    <div className='bar'></div>
                    <input
                        type="number"
                        value={data.age}
                        onChange={(e) => changeFunc("connection", "age", e.target.value)}
                    />
                    {errors.age.length > 0 && (
                        <p className='error'>{errors.age}</p>
                    )}
                </div>
                <div className='question-card'>
                    <label>User Gender</label>
                    <p className="prompt">{prompts.gender}</p>
                    <div className='bar'></div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px"
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <label style={{ fontSize: "18px" }} htmlFor="">Male: </label>
                            <input
                                type="number"
                                value={data.genderMale}
                                onChange={(e) => changeFunc("connection", "genderMale", e.target.value)}
                            />
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                            }}>
                            <label style={{ fontSize: "18px" }} htmlFor="">Female: </label>
                            <input
                                type="number"
                                value={data.genderFemale}
                                onChange={(e) => changeFunc("connection", "genderFemale", e.target.value)}
                            />
                        </div>
                        {errors.genderFemale.length > 0 && (
                            <p className='error'>{errors.genderFemale}</p>
                        )}
                    </div>

                    {errors.genderMale.length > 0 && (
                        <p className='error'>{errors.genderMale}</p>
                    )}
                </div>
                <div className='question-card'>
                    <label>Ethnicity</label>
                    <p className="prompt">{prompts.ethnicity}</p>
                    <div className='bar'></div>
                    <select
                        value={data.ethnicity}
                        onChange={(e) => changeFunc("connection", "ethnicity", e.target.value)}
                    >
                        {ethnicities.map((race, i) => (
                            <option
                                value={race}
                                key={i}
                            >{race}</option>
                        ))}
                    </select>
                    {errors.ethnicity.length > 0 && (
                        <p className='error'>{errors.ethnicity}</p>
                    )}
                </div>
            </form>
        </div>
    )
}

export default Step3
