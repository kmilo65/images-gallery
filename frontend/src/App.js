import { useState } from 'react';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

const App = () => {
  const [word, setword] = useState('');
  const [images, setImages] = useState([]);
  console.log(images);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages([data, ...images]);
      })
      .catch((err) => {
        console.log(err);
      });
    setword('');
  };

  return (
    <div>
      <Header title="Images Gallery" />
      <Search word={word} setword={setword} handleSubmit={handleSearchSubmit} />
    </div>
  );
};

export default App;
