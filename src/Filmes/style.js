import styled from "styled-components";
export const Header = styled.div`
  width: 375px;
  height: 67px;
  position: fixed;
  left: 0px;
  top: 0px;
  background: #c3cfd9;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-size: 34px;
    line-height: 40px;
    text-align: center;
    color: #e8833a;
  }
`;
export const Conteiner = styled.div`
    margin-top: 67px;
    display: flex;
    justify-content: center;
    align-items: center;

  p {
    font-size: 24px;
    line-height: 28px;
    color: #293845;
  }
`;
export const ConteinerFilmes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

`;
