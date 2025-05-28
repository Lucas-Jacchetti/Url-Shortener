import React, { useEffect, useState } from 'react';
import api from '../services/APIservice';

function MyComponent(){
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState(null);
  const [error, setError] = useState(null);


  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page reload
    setError(null); // Clear any previous errors
      try {
        const response = await api.post('/url/shorten', { originalUrl });
        console.log('Shortened URL:', response.data);
      } catch (error) {
        console.error('Error:', error);
      }
  };

  return (
    <>
    <div>
      <h2>URL Shortener</h2>
        <form onSubmit={handleSubmit}>
        <input
          type="url"
          placeholder="Enter URL"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          required
        />
        <button type="submit">Shorten URL</button>
      </form>

      {shortenedUrl && (
        <div>
          <p>Shortened URL:</p>
          <a href={`http://localhost:3000/url/${shortenedUrl}`} target="_blank" rel="noopener noreferrer">
            {`http://localhost:3000/url/${shortenedUrl}`}
          </a>
        </div>
      )}

    </div>
    </>
  );
};

export default MyComponent;