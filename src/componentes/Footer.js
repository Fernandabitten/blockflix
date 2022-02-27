const footer = () => {
    const year = (new Date()).getFullYear();
    return (
        <center>
        <div style={{ color: "#494848" }}>
          {year} Fernanda Bittencourt <br />
          Dados e imagens consumidos do site themoviedb.org
        </div>
      </center>
    )
}

export default footer;