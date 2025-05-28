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
      <div className=' flex flex-col h-full w-auto items-center justify-center mt-50   gap-15'>
        
          <h2 className='flex items-center justify-center text-4xl'>URL Shortener</h2>
          
          <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center gap-8'>
            <input
            className='border rounded-xl p-1 w-90 h-12'
            type="url"
            placeholder="Enter URL"
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
            required
            />
            <button type="submit" className='border rounded-xl bg-buttongray w-30 h-9 cursor-pointer'>Shorten</button>
          </form>

          {/* {shortenedUrl && ( */}
            <div className='border rounded-xl p-2 flex flex-row'>
              <p>Shortened URL: </p>
              <a href={`http://localhost:3000/url/${shortenedUrl}`} target="_blank" rel="noopener noreferrer">
                {`http://localhost:3000/url/${shortenedUrl}`}
              </a>
            </div>
          {/* )} */}
        
      </div>







































    {/* <div>
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

    </div> */}
    </>
  );
};

export default MyComponent;