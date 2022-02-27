import React, { useEffect, useState } from "react";
import Tmdb from "../../Tmdb";
import Layout from "../../componentes/Layoute/Layout";
import MoviesCarousel from "../../componentes/Carousel/MoviesCarousel/MoviesCarousel";
import "./listMoviesPage.css";
import SelectCategory from "../../componentes/Select/SelectCategory";

/*
[ok]  Header
[ok] visualizar os filmes que são lançamento
[ok] nome do filme
[ok] o preço do filme ⇒ como na API não tem essa informação, podemos considerar que
     o preço máximo é R$ 100,00 e utilizar o campo vote_average para ser o preço;
[ok] uma imagem poster do filme
[ok] um botão para adicionar um filme ao carrinho
[ok] um botão para visualizar os detalhes do filme ⇒ pode ser substituído por um clique
    no título, ou algo similar.
[ok]carrossel dos videos
[ok] As lista
[ok} Rodapé Básico
[ok] select de filmes 
*/

export default function ListarFilmes() {
  const [releases, setReleases] = useState({
    category: "",
    title: "",
    items: { results: [] },
  });
  const [movies, setMovies] = useState({
    category: "",
    title: "",
    items: { results: [] },
  });

  const initialCategory = "action";
  const [category, setCategory] = useState("action");

  useEffect(() => {
    const loadAll = async () => {
      let releaseMovies = await Tmdb.getReleases();
      let otherMovies = await Tmdb.getMoviesByCategory(initialCategory);

      setReleases(releaseMovies);
      setMovies(otherMovies);
    };
    loadAll();
  }, []);

  const changeCategory = async (e) => {
    e.preventDefault();
    const newCategory = e.target.value;
    setCategory(newCategory);

    let moviesByCategory = await Tmdb.getMoviesByCategory(newCategory);
    setMovies(moviesByCategory);
  };

  return (
    <Layout>
      <div style={{ marginTop: "12%" }}>
        <div className="releases">
          <MoviesCarousel title={releases.title} items={releases.items} />
        </div>
        <div>
          <div>
            <SelectCategory
              category={category}
              changeCategory={changeCategory}
            />
            <div className="movieCategory">
              <MoviesCarousel title={movies.title} items={movies.items} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
