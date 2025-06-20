import React from 'react';

function InterviewList({ interviews, deleteInterview }) {
  return (
    <ul>
      {interviews.map((interview, index) => (
        <li key={index}>
          {interview.title}
          <button onClick={() => deleteInterview(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default InterviewList;
