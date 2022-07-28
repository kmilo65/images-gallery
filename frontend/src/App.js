import {useState} from 'react';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';


const App = () => {
  
  const [word,setword]=useState('');

  const handleSearchSubmit=(e)=>{
    e.preventDefault();
    console.log(word);
  }

  console.log(word);

  return (
    <div>
      <Header title="Images Gallery"/>
      <Search word={word} setword={setword} handleSubmit={handleSearchSubmit}/>
    </div>
  );
}

export default App;


