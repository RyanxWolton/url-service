import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import URLService from '../utils/URLService';

import TextInput from '../components/TextInput';
import Button from '../components/Button';

import '../styles.scss';

const URLShortening = () => {

  const [inputText, setInputText] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const shortenUrl = async () => {
    const url_service = new URLService();
    setInputText("");
    setLoading(true);
    try {
      const res = await url_service.shorten(inputText);
      setLoading(false);
      setShortUrl(res.data.link);
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <>
      <h1>Shorten a URL!</h1>
      <TextInput 
        onChange={e => {
          setInputText(e.target.value);
        }} 
        placeholder="The URL to shorten"
        value={inputText}
      />
      <Button 
        title="Go!"
        onClick={() => shortenUrl(inputText)}
      />
      { shortUrl &&
        <h1>
          {shortUrl}
        </h1>
      }
      {
        loading && 
        <h1>
          <FontAwesomeIcon icon={faSpinner}/>
        </h1>
      }
    </>
  )
}

export default URLShortening;