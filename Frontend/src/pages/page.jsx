import React, { useEffect, useState } from 'react';
import api from '../services/APIservice';
import convert from '../assets/convert.png'

function MyComponent(){
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState(null);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`http://localhost:3000/url/${shortUrl}`); //copia para área de transferência
    setCopied(true); //diz que está copiado (na pratica)
    setTimeout(() => setCopied(false), 5000);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); //previne que a pagina recarregue
    setError(null); //limpa erros anteriores
      try {
        const response1 = await api.post('/url/shorten', { originalUrl });
        //axios faz uma requisição post no caminho indicado, passando a url original
        
        setShortUrl(response1.data.shortUrl) //diz que a url curta vai ser o resultado da response1 (requisição passando a url longa)     

      } catch (error) { //erro
        console.error('Error:', error);
      }
  };

  return (
    <>
      <div className=' flex flex-col h-full w-auto items-center justify-center mt-34 font-bold'>
        
          <h2 className='flex items-center justify-center text-4xl'>URL Shortener</h2>
          
          <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center gap-8 mt-12'>
            <input
            className='bg-buttongray rounded-xl p-1 pl-3 w-95 h-14'
            type="url"
            placeholder="Enter URL"
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)} //a url original vai ser a que for digitada aqui
            required //campo obrigatório
            />
            <button type="submit" className='rounded-xl text-xl bg-buttongray w-40 h-12 cursor-pointer flex flex-row items-center justify-center gap-3 hover:bg-inputgray hover:scale-102  transition-transform transform'>
              Shorten
              <img src={convert} alt="" className='h-8 w-8'/>
            </button>
          </form>

          {shortUrl && (
            <div className='flex flex-row bg-buttongray shadow-2xl shadow-black rounded-xl mt-10 h-20 '>
              <div className='flex flex-col items-center justify-center gap-2 ml-5'>
                <p>Shortened URL: </p>
                <a href={`http://localhost:3000/url/${shortUrl}`} target="_blank" rel="noopener noreferrer" className='cursor-default'>
                  {`http://localhost:3000/url/${shortUrl}`}
                </a>
              </div>
              <div className='flex justify-center items-center ml-5 bg-inputgray rounded-br-xl rounded-tr-xl p-3 cursor-pointer hover:bg-copygray'
                  onClick={handleCopy} //quando clicar no botão, chama a função
                  //alterna o texto entre os dois dependendo do estado (copied se for true, copy se for false)
                > {copied ? "Copied!" : "Copy"}
              </div>         
            </div>
          )}
        
      </div>
    </>
  );
};

export default MyComponent;