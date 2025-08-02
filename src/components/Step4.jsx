import React from 'react'
import '../styles/Review.css'
import { useState } from 'react'

function Step4({ data }) {
    const [isFoundationOpen, setIsFoundationOpen] = useState(false);
    const [isPerceptionOpen, setIsPerceptionOpen] = useState(false);
    const [isConnectionOpen, setIsConnectionOpen] = useState(false);

    const openBox = (setter) => {
        setter(prevState => !prevState)
    }

    return (
        <div className='review-container'>
            <h2>Review</h2>
            <div className='review-box-container'>
                <div className={`review-box ${isFoundationOpen ? 'box-open' : 'box-closed'}`}>
                    <div className='heading'>
                        <h3>Foundation</h3> {isFoundationOpen ?
                            <span className="icon" onClick={() => openBox(setIsFoundationOpen)}>▲</span> : <span className="icon" onClick={() => openBox(setIsFoundationOpen)}>▼</span>}
                    </div>
                    {isFoundationOpen && (
                        <div className='review-card'>
                            <div>
                                <p>Business Name:</p>
                                <span>{data.foundation.businessName}</span>
                            </div>
                            <div>

                                <p>Mission Statements:</p>
                                <span>{data.foundation.missionStatement}</span>
                            </div>
                            <div>
                                <p>Promise:</p>
                                <span>{data.foundation.promise}</span>
                            </div>
                        </div>
                    )}
                </div>
                <div className={`review-box ${isPerceptionOpen ? 'open' : 'closed'}`}>
                    <div className='heading'>
                        <h3>Perception</h3> {isPerceptionOpen ?
                            <span className="icon" onClick={() => openBox(setIsPerceptionOpen)}>▲</span> : <span className="icon" onClick={() => openBox(setIsPerceptionOpen)}>▼</span>}
                    </div>
                    {isPerceptionOpen && (
                        <div className='review-card'>
                            <div>
                                <p>Message:</p>
                                <span>{data.perception.message}</span>
                            </div>
                            <div>

                                <p>Voice:</p>
                                <span>{data.perception.voice}</span>
                            </div>
                            <div>
                                <p>IT Factor:</p>
                                <span>{data.perception.ItFactor}</span>
                            </div>
                        </div>
                    )}
                </div>
                <div className={`review-box ${isConnectionOpen ? 'box-open' : 'box-closed'}`}>
                    <div className='heading'>
                        <h3>Connection</h3> {isConnectionOpen ?
                            <span className="icon" onClick={() => openBox(setIsConnectionOpen)}>▲</span> : <span className="icon" onClick={() => openBox(setIsConnectionOpen)}>▼</span>}
                    </div>
                    {isConnectionOpen && (
                        <div className='review-card'>
                            <div>
                                <p>Average Age:</p>
                                <span>{data.connection.age}</span>
                            </div>
                            <div>
                                <p>Gender %:</p>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "column"
                                }}>
                                    <span><strong>Male: </strong>{data.connection.genderMale}%</span>
                                    <span><strong>Female:</strong> {data.connection.genderFemale}%</span>
                                </div>
                            </div>
                            <div>
                                <p>Ethnicity:</p>
                                <span>{data.connection.ethnicity}</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div >
    )
}

export default Step4
