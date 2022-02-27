import styled from "styled-components";

export const CardActorStyled = styled.div`
  width: 100%;
  img {
    margin-top: -50px;
  }
`;

export const ContainerImgStyled = styled(CardActorStyled)`
  position: relative;
  margin-top: 0;
`;

export const InfoActorStyled = styled(CardActorStyled)`
  margin: center;
  padding: -10px;
  display: flex;
  @media (max-width: 760px) {
    span {
      font-size: 14px;
      max-width: 100%;
      margin-right: 30px;
    }
  }
`;
