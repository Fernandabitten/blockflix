import styled from "styled-components";

export const ProductBox = styled.div`
  display: flex;
  background-color: white;
  width: 85%;
  margin: auto;
  border: 1px solid #3498db;
  border-radius: 6px;
  padding: 10px 16px;
  display: flex;
  color: black;
  .containerProduct {
    max-width: 100%;
  }
  .detail {
    width: 100%;
  }
  .bin {
    margin-left: 75%;
  }
  .imgPoster {
    max-width: 100%;
    margin: 0 auto;
  }
  .itemPrice {
    font-size: 18px;
  }
  @media (max-width: 760px) {
    .imgPoster {
      max-width: 100%;
    }
    .containerProduct {
      width: 100%;
    }
    .detail {
      max-width: 100%;
      font-size: 10px;
    }
    .itemPrice {
      max-width: 100%;
      font-size: 10px;
    }
  }
`;

/* export const ColLeft = styled(ProductBox)`
width: 100%;
color: black;
`; */
