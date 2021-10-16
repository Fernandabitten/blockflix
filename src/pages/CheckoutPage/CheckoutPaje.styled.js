import styled from "styled-components";

export const ContainerCheckout = styled.div`
  margin-top: 10%;
  display: flex;
  margin-left: 10%;  
`;

export const CheckoutStyled = styled(ContainerCheckout)`
  width: 55%;
  margin: 0 auto;
  overflow: hidden;    
  display: inline-block;
`;

export const CardStyled = styled(ContainerCheckout)` 
  margin: 0 auto;
  overflow: hidden;
  width: 45%; 
  margin-top: 6%;
`;

export const Count = styled(ContainerCheckout)`
  margin-top: 2%;
  color: #494848;
  margin-left: 1%;
`;

export const CartItems = styled(ContainerCheckout)`
  display: flex;
  justify-content: space-between;
  margin-left: 1%;
`;
