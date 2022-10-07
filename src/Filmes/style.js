import styled from "styled-components";
export const Header = styled.div`
  width: 100%;
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
  flex-wrap: wrap;

  p {
    display: flex;
    justify-content: center;
    width: 375px;
    font-size: 24px;
    line-height: 28px;
    color: #293845;
  }

  img {
    margin: 0 30px 12px 0;
    width: 145px;
    height: 209px;
    background: #ffffff;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
  }
`;
