import React from "react";
import Navbar from "../Navbar/NavBar";

export default function Layout({ children, titulo }) {
  return (
    <div style={{marginTop:"15vh"}}>
      <Navbar />
      {children}
      {/*<center>
      <footer style={{ bottom: "0", left: "0", width:"100%", height:"100px", position:"absolute", marginTop:"0"}}>
            @ Fernanda Bittencourt <br />
            Dados consumidos do site themoviedb.org 
      </footer>
      </center>*/}
    </div>
  );
}
