import { useState } from 'react';
import Axios from 'axios';
import Button from './utils/Button'
import './App.css';

function App() {
  const [joke, setJoke] = useState("");
  const [cookieIsOpen, setcookieIsOpen] = useState(false);

  const getPhrase = () => {
    setcookieIsOpen(true)
    Axios.get('https://type.fit/api/quotes').then(
      (response) => {
        let randomNumber = Math.floor(Math.random() * response.data.length)
        setJoke(response.data[randomNumber].text)
      }
    ).catch(error => {
      console.error(error);
    })
  };

  const clearPhrase = () => {
    setcookieIsOpen(false)
    setJoke("")
  }

  return (
    <div className="container">
      <img src={
        cookieIsOpen ?
          require('./assets/game-fortune-cookie-2-v3.png')
          :
          require('./assets/game-fortune-cookie-1-v3.webp')}
        className="image"
        alt="imagem biscoito da sorte">
      </img>
      {
        cookieIsOpen ?
          <p className='phrase'>{joke}</p>
          :
          <p></p>
      }
      {
        !cookieIsOpen ?
          <Button className={"button"} name={"Abrir biscoito da sorte"} clickHandler={getPhrase} />
          :
          <Button className={"button"} name="Abrir outro biscoito da sorte" clickHandler={clearPhrase}></Button>
      }
    </div>
  );
}

export default App;
