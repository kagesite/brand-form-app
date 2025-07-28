import React from 'react'

function Step1({ data, prompts, changeFunc, errors }) {
    return (
        <div>
            <form>
                <div>
                    <label>Business Name:</label>
                    <p>{prompts.businessName}</p>
                    <input
                        type="text"
                        value={data.businessName}
                        onChange={(e) => changeFunc("foundation", "businessName", e.target.value)}
                    />
                </div>
                <div>
                    <label>Mission Statement:</label>
                    <p>{prompts.missionStatement}</p>
                    <textarea
                        type="text"
                        value={data.missionStatement}
                        onChange={(e) => changeFunc("foundation", "missionStatement", e.target.value)}
                    />
                </div>
                <div>
                    <label>Promise:</label>
                    <p>{prompts.promise}</p>
                    <textarea
                        type="text"
                        value={data.promise}
                        onChange={(e) => changeFunc("foundation", "promise", e.target.value)}
                    />
                </div>
            </form>
            {data.businessName}
        </div>
    )
}

export default Step1
