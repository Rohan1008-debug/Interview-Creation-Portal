import React, { useState } from 'react';

function InterviewForm({ addInterview }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addInterview({ title });
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Interview Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
}

export default InterviewForm;
