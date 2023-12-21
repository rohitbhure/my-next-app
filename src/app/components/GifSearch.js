// components/GifSearch.js
import { useState } from 'react';
import axios from 'axios';

const GifSearch = () => {
  const [query, setQuery] = useState('');
  const [gifs, setGifs] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=GlVGYHkr3WSBnllca54iNt0yFbjz7L65`);
      setGifs(response.data.data);
    } catch (error) {
      console.error('GIF search error:', error.message);
    }
  };

  return (
    <div>
      <h2>GIF Search</h2>
      <input type="text" placeholder="Search GIFs" onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <div>
        {gifs.map((gif) => (
          <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} />
        ))}
      </div>
    </div>
  );
};

export default GifSearch;
