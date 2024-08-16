import React, { useState } from 'react';
import axios from 'axios';

const AIChatbot = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post('/api/ai-search', { query: input }); // Adjust the API endpoint accordingly
      setResponse(result.data.response);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="ai-chatbot">
      <h2>Ask a Question</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your question..."
        />
        <button type="submit">Search</button>
      </form>
      {response && <p>{response}</p>}
    </div>
  );
}

export default AIChatbot;
