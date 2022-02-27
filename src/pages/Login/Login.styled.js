import styled from "styled-components";

export const LoginStayled = styled.div`
    display: flex;
    background-position: center;
    height: 100vh;
    width: 100%;
    background-color: white;
    background-size: cover;
    text-alin: center;
`;

export const Body = styled(LoginStayled)`
    marginTop: "4%", 
    margin-left: "10%"; 
    align-items: "center"; 
    text-align: "center";
`;

export const VerticalColumn = styled(LoginStayled)`
  width: inherit;
  height: inherit;
  background: linear-gradient(to top, #050714 10%, transparent 90%);
`;

export const HorizontalColumn = styled(LoginStayled)`
  width: inherit;
  height: inherit;
  background: linear-gradient(to right, #050714 25%, transparent 75%);
`;
