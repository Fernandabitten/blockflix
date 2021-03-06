import React, { useState } from "react";
import "./cardActorRow.css";
import CardActor from "../../Cards/CardActor/CardActor";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

import { useHistory } from "react-router-dom";

function ActorCarousel({ actor, item, itemDetails }) {
  const [scroll, setScroll] = useState(0);

  const history = useHistory();
  const irParaDetalharActor = (idItem) => {
    console.log("detalhar ator");
    history.push(`/movies/${idItem}`);
  };

  const handleRightArrow = () => {
    let x = scroll - Math.round(window.innerWidth / 2);
    let listWidht = itemDetails.cast.length * 150;
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
    <div className="actorRow">
      <div className="actorRow--listarea">
        <h2
          style={{ marginTop: "20vh", paddingLeft: "20px" }}
          className="title-list"
        >
          Elenco
        </h2>
        <div className="actorRow--left" onClick={handleLeftArrow}>
          <NavigateBeforeIcon style={{ fontSize: 50 }} />
        </div>
        <div className="actorRow--right" onClick={handleRightArrow}>
          <NavigateNextIcon style={{ fontSize: 50 }} />
        </div>

        <div
          className="actorRow--list"
          style={{ marginLeft: scroll, width: itemDetails.cast.length * 150 }}
        >
          {itemDetails.cast.length > 0 &&
            itemDetails.cast.map((actor, key) => {
              return (
                <div key={key} className="actorRow--item">
                  <div>
                    <CardActor
                      actor={actor}
                      key={actor.id}
                      navigate={irParaDetalharActor}
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default ActorCarousel;
