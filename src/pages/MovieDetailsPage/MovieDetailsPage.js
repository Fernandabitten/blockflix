import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Tmdb from "../../Tmdb";
import Layout from "../../componentes/Layoute/Layout";
import {
  MovieDetailsStayled,
  BoxActorCarouselStyled,
  BoxMoviesCarouselStyled,
} from "./MovieDetailsPage.styled";
import CardMovieDetails from "../../componentes/Cards/CardMovieDetails/CardMovieDetails";
import ActorCarousel from "../../componentes/Carousel/ActorCarousel/ActorCarousel";
import MoviesCarousel from "../../componentes/Carousel/MoviesCarousel/MoviesCarousel";
import loading from "../../img/loading2.gif";

export default function DetalharFilme() {
  const [item, setItem] = useState(null);
  const [itemDetails, setItemDetails] = useState(null);
  const [recommendations, setRecommendations] = useState({
    category: "",
    title: "",
    results: [],
  });

  const params = useParams();

  useEffect(() => {
    const details = async () => {
      setItem(await Tmdb.getMovie(params.id));
    };

    const detailsElenc = async () => {
      setItemDetails(await Tmdb.getMovieDetails(params.id));
    };

    const detailsRecoemmend = async () => {
      setRecommendations(await Tmdb.getMovieRecommendations(params.id));
    };

    details();
    detailsElenc();
    detailsRecoemmend();
  }, [params.id]);

  if (item === null || itemDetails === null) {
    return (
      <div
        style={{ backgroundColor: "#151f28", width: "100%", height: "600px" }}
      >
        <img
          src={loading}
          alt="gif loading"
          style={{ width: "25%", marginLeft: "40%" }}
        />
      </div>
    );
  }

  return (
    <Layout>
      <MovieDetailsStayled>
        <CardMovieDetails
          item={item}
          setItem={setItem}
          itemDetails={itemDetails}
        />

        <BoxActorCarouselStyled>
          <ActorCarousel item={item} itemDetails={itemDetails} />
        </BoxActorCarouselStyled>

        <BoxMoviesCarouselStyled>
          <MoviesCarousel title="Filmes Recomendados" items={recommendations} />
        </BoxMoviesCarouselStyled>
      </MovieDetailsStayled>
    </Layout>
  );
}
