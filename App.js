import React, { useState } from 'react';
import InterviewForm from './InterviewForm';
import InterviewList from './InterviewList';

function App() {
  const [interviews, setInterviews] = useState([]);

  const addInterview = (newInterview) => {
    setInterviews([...interviews, newInterview]);
  };

  const deleteInterview = (index) => {
    const updated = [...interviews];
    updated.splice(index, 1);
    setInterviews(updated);
  };

  return (
    <div>
      <h2>Interview Portal</h2>
      <InterviewForm addInterview={addInterview} />
      <InterviewList interviews={interviews} deleteInterview={deleteInterview} />
    </div>
  );
}

export default App;
