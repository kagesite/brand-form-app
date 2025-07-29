import React from 'react'
import "../styles/Form.css"

function Step2({ data, prompts, changeFunc, errors }) {
    return (
        <div>
            <form className='form-container'>
                <div className='question-card'>
                    <label>Message:</label>
                    <p className="prompt">{prompts.message}</p>
                    <div className='bar'></div>
                    <textarea
                        type="text"
                        value={data.message}
                        onChange={(e) => changeFunc("perception", "message", e.target.value)}
                    />
                    {errors.message.length > 0 && (
                         <p className='error'>{errors.message}</p>
                    )}
                </div>
                <div className='question-card'>
                    <label>Voice</label>
                    <p className="prompt">{prompts.voice}</p>
                    <div className='bar'></div>
                    <textarea
                        type="text"
                        value={data.voice}
                        onChange={(e) => changeFunc("perception", "voice", e.target.value)}
                    />
                    {errors.voice.length > 0 && (
                         <p className='error'>{errors.voice}</p>
                    )}
                </div>
                <div className='question-card'>
                    <label>It Factor:</label>
                    <p className="prompt">{prompts.ItFactor}</p>
                    <div className='bar'></div>
                    <textarea
                        type="text"
                        value={data.ItFactor}
                        onChange={(e) => changeFunc("perception", "ItFactor", e.target.value)}
                    />
                    {errors.ItFactor.length > 0 && (
                         <p className='error'>{errors.ItFactor}</p>
                    )}
                </div>
            </form>
        </div>
    )
}

export default Step2
