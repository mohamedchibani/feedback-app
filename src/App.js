import React, { useState } from 'react';
import FeedbackList from './components/FeedbackList';
import Header from './components/Header';
import Card from './components/shared/Card';
import FeedbackData from './data/FeedbackData';


function App() {

    const [feedback, setFeedback] = useState(FeedbackData);

    return (
        <>
            <Header bgColor='blue' textColor='red' />
            <div className="container">
                <FeedbackList feedback={feedback} />
            </div>
        </>
    )
}

export default App;