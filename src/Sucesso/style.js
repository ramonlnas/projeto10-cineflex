import styled from "styled-components";

export const Title = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  margin-top: 65px;
  h1 {
    font-size: 24px;
    font-weight: 400;
    font-family: "Roboto";
    font-style: normal;
    color: #247a6b;
  }
`;

export const Main = styled.div`
  width: 100%;
  margin-left: 10px;
  h1 {
    margin-left: 10px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #293845;
    margin-bottom: 10px;
  }
  h2 {
    margin-left: 10px;
    margin-bottom: 10px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
  }
`;

export const Inicio = styled.button`
  margin-top: 70px;
  width: 225px;
  height: 42px;
  background: #e8833a;
  border-radius: 3px;
  color: white;
`;
