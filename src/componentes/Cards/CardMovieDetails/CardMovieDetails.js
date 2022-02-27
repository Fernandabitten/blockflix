import React, { useContext } from "react";
import { MyContext } from "../../../context/context";
import "./cardMovieDetails.css";
import Button from "@material-ui/core/Button";

export default function CardMovieDetails({ item, itemDetails }) {
  const { addItemToCart } = useContext(MyContext);

  const onClickAdicionarAoCarrinho = () => {
     addItemToCart(item); 
  };

  const convertMovieRuntime = (minutos) => {
    const horas = Math.floor(minutos / 60);
    const min = minutos % 60;
    const textoHoras = `00${horas}`.slice(-1);
    const textoMinutos = `00${min}`.slice(-2);
    return `${textoHoras}h:${textoMinutos}min`;
  };

  const movieRuntime = convertMovieRuntime(item.runtime);

  const releaseYear = new Date(item.release_date);

  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  let description = item.overview;
  if (description.length > 400) {
    description = description.substring(0, 400)+"...";
  }

  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="verticalColumn">
        <div className="horizontalColumn">
          <br />
          <div className="title">{item.title}</div>

          <div className="info">
            {movieRuntime} {releaseYear.getFullYear()}
            <div>{genres.join(", ")}</div>
          </div>

          <Button
            onClick={onClickAdicionarAoCarrinho}
            style={{
              color: "#fff",
              backgroundColor: "#D3840B",
              fontSize: "20px",
              fontWeight: "bold",
              width: "200px",
              marginTop: "15px",
              marginRight: "15px",
              padding: "15p 25px",
            }}
          >
            <div>R$ {(item.vote_average * 10).toFixed(2)}</div>
          </Button>
          <div className="description"><p>{description}</p></div>
          <div
            style={{ width: "100%", height: "100%", marginTop: "-25%" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
