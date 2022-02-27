import styled from "styled-components";

export const ContainerCheckoutStyled = styled.div`
  display: flex;
	margin:auto;
	width:70%;  
  .products > li {
    padding: 1rem 0;
    border-bottom: 1px solid #494848;
    width: 80%; 
  }

  @media (max-width:760px){
    h1 {
      font-size: 14px;
    }
    li {
      font-size: 12px;
      //max-width: 100%;
    }
    .buttonCheckout{
      font-size: 12px;  
   }
   .row{
    position: relative;
    width: 100%;
    font-size: 12px;
  }
} 
`;

export const CheckoutStyled = styled(ContainerCheckoutStyled)`
  width: 50%;
  margin: 0 auto; 
  overflow: hidden;    
  display: inline-block;
  align-items: center;
`;

export const CardStyled = styled(ContainerCheckoutStyled)` 
  margin: 0 auto;
  overflow: hidden;
  width: 45%; 
  margin-top: 9%;
  display: inline-block;
  padding: 2px;
  border: 1px solid white;
  h3 {
    padding: 2%;
  }
  .totalSum {
    max-width: 100%;
    margin-left: 3%;
  } 
  li {
    padding: 1rem 0;
    border-bottom: 1px solid #494848;
    max-width: 100%;   
  }
  @media (max-width:760px){
    font-size: 10px;
  }
`;

export const CountStyled = styled(ContainerCheckoutStyled)`
  max-width: 100%; 
  margin-top: 2%;
  color: #494848;
  margin-left: 1%;
  h2 {
    margin-left: 10%;
  }
  @media (max-width:760px){
    width: 100%;
    font-size: 10px;
  }
`;

export const CartItemsStyled = styled(ContainerCheckoutStyled)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2%;
  font-size: 18px;
  .productTitle{
    width: 50%;
  }
  .average {
    display: grid;
    grid-template-rows: repeat(1, 2px);
  }
  @media (max-width:760px){
    width: 100%;
    font-size: 10px;
  }
`;
