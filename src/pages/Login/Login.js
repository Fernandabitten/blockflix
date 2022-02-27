import React from "react";
import Banner from "../../img/bannerDesktop.png";
import BannerCel from "../../img/bannerCel.png";
import LoginForm from "../../componentes/Form/LoginForm";
import Footer from "../../componentes/Footer.js";
import "../../componentes/Cards/CardMovieDetails/cardMovieDetails.css";
import { LoginStayled, VerticalColumn, HorizontalColumn } from "./Login.styled";

function Login() {
  const imageUrl = window.innerWimageUrlidth >= 550 ? Banner : BannerCel;
  return (
    <LoginStayled style={{ backgroundImage: `url(${imageUrl})` }}>
      <VerticalColumn>
        <HorizontalColumn>
          <div
            style={{ marginTop: "4%", marginLeft: "7%", textAlign: "center" }}
          >
            <h1> Assista a filmes em qualquer Lugar</h1>
            <LoginForm />
            <Footer />
          </div>
        </HorizontalColumn>
      </VerticalColumn>
    </LoginStayled>
  );
}

export default Login;
