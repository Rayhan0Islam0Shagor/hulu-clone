import { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import requests from './Components/Request/requests';
import Result from './Components/Result/Result';

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTopRated);



  return (
    <div className="app">
      <Header />

      <Nav setSelectedOption={setSelectedOption} />

      <Result selectedOption={selectedOption} />
    </div>
  );
}

export default App;
