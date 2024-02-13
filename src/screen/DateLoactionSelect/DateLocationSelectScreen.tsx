"use client";
import React, { useState } from 'react'
import "./date_locaton_select_screen.scss"
import CreatableSelect from 'react-select/creatable';
import axios from 'axios';

const DateLocationSelectScreen = () => {
  const [title, setTitle] = useState(true)
  const [gif, setGif] = useState("https://media4.giphy.com/media/CJ5bKVKLSQsrs3nJw2/giphy.gif?cid=ecf05e47rly5v8gd0bphd5ct7n85siobd7eyy0xe3hkml64d&ep=v1_gifs_related&rid=giphy.gif&ct=s")


  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  const [selectedValues, setSelectedValues] = useState([]);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setGif(
      'https://media3.giphy.com/media/jyuuoHidVXPuJ2iBRT/giphy.gif?cid=ecf05e470ggvsfgcfvaku3680ddxs6r8epgs7adgdpeapi89&ep=v1_gifs_related&rid=giphy.gif&ct=s'
    );
    axios.post(
      `https://api.telegram.org/bot${'6426676306:AAEhCk0qYiYAy2TWteD4CUHq9TvfGbcZtdA'}/sendMessage`,
      {
        chat_id: 898391639,
        text: `Location: ${selectedValues?.value}`,
      }
    );
  };

  return (
    <div className="wrapper">
      <h2 className="question">{
        title ? `${"Do we date today?"}` : `${"I love you too!❤️"}`
      }</h2>
      <div className="gif">
        <img
          alt="gif"
          src={gif} />
      </div>

      <div className=' mt-5'>
        <form onSubmit={handleSubmit}>
          <CreatableSelect
            options={options}
            onChange={(e: any) => setSelectedValues(e)}
            value={selectedValues}
            name=""
            required
          />
          <button type="submit">Submit</button>
        </form>

      </div>

    </div>
  )
}

export default DateLocationSelectScreen
