import React from "react";
import Navbar from "../Navbar/NavBar";

export default function Layout({ children, titulo }) {
  return (
    <div style={{marginTop:"15vh"}}>
      <Navbar />
      {children}
    </div>
  );
}
