import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import CardMovie from "../../Cards/CardMovie/CardMovie";

export default function MoviesCarousel({ title, items }) {
  const [scroll, setScroll] = useState(0);
  const history = useHistory();

  const irParaDetalharFilme = (idItem) => { 
    console.log(idItem)   
    history.push(`/movies/${idItem}`);
  };

  const handleRightArrow = () => {
    let x = scroll - Math.round(window.innerWidth / 2);
    let listWidht = items.results.length * 190;
    /*pega metade da tela do cara*/
    if (window.innerWidth - listWidht > x) {
      x = window.innerWidth - listWidht - 60;
    }
    setScroll(x);
  };

  const handleLeftArrow = () => {
    let x = scroll + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScroll(x);
  };

  return (
    <div className="movieRow--listarea">
      <h2 style={{marginTop:"20vh"}}>{title}</h2>
      <div className="movieRow--left" onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </div>
      <div className="movieRow--right" onClick={handleRightArrow}>
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </div>

      <div
        className="movieRow--list"
        style={{ marginLeft: scroll, width: items.results.length * 300 }}
      >
        {items.results.length > 0 &&
          items.results.map((movie, key) => (
            <div key={key} className="movieRow--item">
              <CardMovie
                key={movie.id}
                item={movie}
                navigate={irParaDetalharFilme}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
