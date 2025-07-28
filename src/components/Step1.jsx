import React from 'react'
import "../styles/Form.css"

function Step1({ data, prompts, changeFunc, errors }) {
    return (
        <div>
            <form className='form-container'>
                <div className='question-card'>
                    <label>Business Name:</label>
                    <p className="prompt">{prompts.businessName}</p>
                    <div className='bar'></div>
                    <input
                        type="text"
                        value={data.businessName}
                        onChange={(e) => changeFunc("foundation", "businessName", e.target.value)}
                    />
                    {errors.businessName.length > 0 && (
                         <p className='error'>{errors.businessName}</p>
                    )}
                </div>
                <div className='question-card'>
                    <label>Mission Statement</label>
                    <p className="prompt">{prompts.missionStatement}</p>
                    <div className='bar'></div>
                    <textarea
                        type="text"
                        value={data.missionStatement}
                        onChange={(e) => changeFunc("foundation", "missionStatement", e.target.value)}
                    />
                    {errors.missionStatement.length > 0 && (
                         <p className='error'>{errors.missionStatement}</p>
                    )}
                </div>
                <div className='question-card'>
                    <label>Promise:</label>
                    <p className="prompt">{prompts.promise}</p>
                    <div className='bar'></div>
                    <textarea
                        type="text"
                        value={data.promise}
                        onChange={(e) => changeFunc("foundation", "promise", e.target.value)}
                    />
                    {errors.promise.length > 0 && (
                         <p className='error'>{errors.promise}</p>
                    )}
                </div>
            </form>
            {data.businessName}
        </div>
    )
}

export default Step1
