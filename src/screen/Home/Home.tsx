"use client";
import { useState } from "react"
import "./home_screen.scss"

const HomeScreen = () => {
  const [a, setA] = useState("Movie")
  const [gg, setGg] = useState(true)
  const [title, setTitle] = useState(true)
  const [location, setLocation] = useState(false)
  const [gif, setGif] = useState("https://media4.giphy.com/media/CJ5bKVKLSQsrs3nJw2/giphy.gif?cid=ecf05e47rly5v8gd0bphd5ct7n85siobd7eyy0xe3hkml64d&ep=v1_gifs_related&rid=giphy.gif&ct=s")
  const handleYesClick = () => {
    setTitle(!true);
    setLocation(true)
    setGif(
      'https://media3.giphy.com/media/jyuuoHidVXPuJ2iBRT/giphy.gif?cid=ecf05e470ggvsfgcfvaku3680ddxs6r8epgs7adgdpeapi89&ep=v1_gifs_related&rid=giphy.gif&ct=s'
    );
  }
  const handleYesClickLocation = () => {
    setGg(!true)
    setTitle(!true);
    setLocation(false)
    setGif(
      'https://media2.giphy.com/media/L0C8zaGsr3O47Mms4M/giphy.gif?cid=ecf05e47zpci06pihgvmi6ozciextx20di4en1b950coglvq&ep=v1_gifs_related&rid=giphy.gif&ct=s'
    );
  }
  const handleClickA = () => {
    setA("Unhappy")
  }
  const handleClickB = () => {
    setA("No Money")
  }
  const handleNoMouseOver = () => {

    const noBtn = document.querySelector('.no-btn') as HTMLButtonElement;

    if (noBtn) {
      const noBtnRect = noBtn.getBoundingClientRect();
      const maxX = window.innerWidth - noBtnRect.width;
      const maxY = window.innerHeight - noBtnRect.height;
      const randomX = Math.floor(Math.random() * maxX);
      const randomY = Math.floor(Math.random() * maxY);
      noBtn.style.left = randomX + 'px';
      noBtn.style.top = randomY + 'px';
    }

  };
  const handleNoMouseOverLocationA = () => {

    const noBtn = document.querySelector('.no-a') as HTMLButtonElement;

    if (noBtn) {
      const noBtnRect = noBtn.getBoundingClientRect();
      const maxX = window.innerWidth - noBtnRect.width;
      const maxY = window.innerHeight - noBtnRect.height;
      const randomX = Math.floor(Math.random() * maxX);
      const randomY = Math.floor(Math.random() * maxY);
      noBtn.style.left = randomX + 'px';
      noBtn.style.top = randomY + 'px';
    }

  };
  const handleNoMouseOverLocationB = () => {

    const noBtn = document.querySelector('.no-b') as HTMLButtonElement;

    if (noBtn) {
      const noBtnRect = noBtn.getBoundingClientRect();
      const maxX = window.innerWidth - noBtnRect.width;
      const maxY = window.innerHeight - noBtnRect.height;
      const randomX = Math.floor(Math.random() * maxX);
      const randomY = Math.floor(Math.random() * maxY);
      noBtn.style.left = randomX + 'px';
      noBtn.style.top = randomY + 'px';
    }

  };
  return (
    <div className="wrapper">
      <h2 className={`question ${gg ? '' : "hidden"}`}>{
        title ? `${"Will you be my valentine ?"}` : `${"Where we will date!❤️"} `}
      </h2>
      <h2 className={`question ${gg ? 'hidden' : ""}`}>{
        title ? `${""}` : `${"Let's Go ❤️"} `}
      </h2>
      <div className="gif">
        <img
          alt="gif"
          src={gif} />
      </div>

      <div className={`${title ? "" : "hidden"}`}>
        <div className="btn-group">
          <button className="yes-btn" onClick={handleYesClick} >
            Yes
          </button>
          <button className="no-btn" onMouseOver={handleNoMouseOver} >
            No
          </button>
        </div>
      </div>
      <div className={`${location ? "" : "hidden"}`}>
        <div className="btn-group">
          <button className="yes-loca" onClick={handleYesClickLocation} >
            {a}
          </button>
          <button className="no-a" onMouseOver={handleNoMouseOverLocationA} onClick={handleClickA}>
            Eat sth
          </button>
          <button className="no-b" onMouseOver={handleNoMouseOverLocationB} onClick={handleClickB}>
            Hang out
          </button>
        </div>
      </div>

    </div>
  )
}

export default HomeScreen
