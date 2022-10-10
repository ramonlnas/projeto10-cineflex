import styled from "styled-components";

export const Conteiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  margin-top: 67px;

  p {
    width: 350px;
    display: flex;
    justify-content: center;
    font-size: 24px;
    line-height: 28px;
    color: #293845;
  }
`;

export const Main = styled.main`
  width: 375px;
  height: 810px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const DivAssentos = styled.div`
  width: 375px;
  height: 215px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const Assentos = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.selecionado ? "background-color: #0E7D71 !important;" : ""}
  background-color: ${(props) => (props.habilitado ? "#C3CFD9" : "#F7C52B")};
  border: solid 1px #808f9d;
  border-radius: 12px;
  margin: 18px 7px;
  p {
    font-size: 12px;
    text-align: center;
    color: #000000;
  }
`;

export const Legenda = styled.div`
  width: 375px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 200px;
`;
export const Selecionado = styled.div`
  width: 25px;
  height: 25px;
  background-color: #0e7d71;
  border: solid 1px #1aae9e;
  border-radius: 17px;
`;

export const Disponivel = styled.div`
  width: 25px;
  height: 25px;
  background-color: #c3cfd9;
  border: solid 1px #7b8b99;
  border-radius: 17px;
`;

export const Indisponivel = styled.div`
  width: 25px;
  height: 25px;
  background-color: #fbe192;
  border: solid 1px #f7c52b;
  border-radius: 17px;
`;

export const Textos = styled.div`
  width: 375px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  p {
    font-size: 13px;
    font-weight: 400;
    font-style: normal;
    color: #4e5a65;
  }
`;

export const DivInputs = styled.div`
  width: 375px;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  p {
    font-size: 18px;
    font-weight: 400;
    color: #293845;
  }
`;

export const Input = styled.input`
  width: 327px;
  height: 51px;
  padding-left: 15px;
  border: 1px solid #d4d4d4;
  border-radius: 3px;
  margin-bottom: 7px;
  font-size: 18px;
`;

export const Reservar = styled.button`
  width: 225px;
  height: 42px;
  background-color: #e8833a;
  border-radius: 3px;
  font-size: 18px;
  text-align: center;
  color: #ffffff;
  margin-top: 135px;
  margin-left: 80px;
  margin-bottom: 30px;
`;

export const Footer = styled.div`
  width: 375px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #dfe6ed;
  border: solid 1px #9eadba;

  img {
    width: 64px;
    height: 89px;
    border-radius: 2px;
    margin: 0px 15px;
  }

  h1 {
    font-size: 26px;
    color: #293845;
  }
  p {
    font-size: 26px;
    font-weight: 400;
    color: #293845;
  }
`;
