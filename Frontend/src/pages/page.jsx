import React, { useEffect, useState } from 'react';
import api from '../services/APIservice';
import convert from '../assets/convert.png'

function MyComponent(){
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState(null);
  const [error, setError] = useState(null);


  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page reload
    setError(null); // Clear any previous errors
      try {
        const response1 = await api.post('/url/shorten', { originalUrl });
        setShortUrl(response1.data.shortUrl)

        const response2 = await api.get(`/url/${shortUrl}`);
        

      } catch (error) {
        console.error('Error:', error);
      }
  };

  return (
    <>
      <div className=' flex flex-col h-full w-auto items-center justify-center mt-50 font-bold'>
        
          <h2 className='flex items-center justify-center text-4xl'>URL Shortener</h2>
          
          <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center gap-8 mt-12'>
            <input
            className='border rounded-xl p-1 pl-3 w-90 h-12'
            type="url"
            placeholder="Enter URL"
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
            required
            />
            <button type="submit" className='border rounded-xl text-xl bg-buttongray w-40 h-12 cursor-pointer flex flex-row items-center justify-center gap-3'>
              Shorten
              <img src={convert} alt="" className='h-8 w-8'/>
            </button>
          </form>

          {shortUrl && (
            <div className='border rounded-xl p-3 flex flex-col items-center justify-center gap-2 mt-10'>
              <p>Shortened URL: </p>
              <a href={`http://localhost:3000/url/${shortUrl}`} target="_blank" rel="noopener noreferrer">
                {`http://localhost:3000/url/${shortUrl}`}
              </a>
            </div>
          )}
        
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