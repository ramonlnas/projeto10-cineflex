import styled from "styled-components";

export const Title = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  h1 {
    font-size: 24px;
    font-weight: 400;
    font-family: "Roboto";
    font-style: normal;
    color: #247a6b;
  }
`;

export const Main = styled.main`
  width: 375px;
  height: 810px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Div = styled.div`
  width: 375px;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 24px;
    font-weight: 700;
    font-style: bold;
    line-height: 28.13px;
    letter-spacing: 4%;
    text-align: center;
    color: #293845;
  }

  p {
    font-size: 22px;
    font-weight: 400;
    font-style: normal;
    line-height: 25.78px;
    letter-spacing: 4%;
    text-align: center;
    color: #293845;
  }
`;

export const Home = styled.button`
  width: 225px;
  height: 42px;
  background-color: #e8833a;
  border-radius: 3px;
  font-size: 18px;
  font-weight: 400;
  font-style: normal;
  line-height: 21.09px;
  letter-spacing: 4%;
  text-align: center;
  color: #ffffff;
`;
