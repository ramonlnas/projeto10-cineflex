import styled from "styled-components";

export default function Footer({filme}) {
    const {posterURL, title} = filme
    //console.log(title, posterURL)
  return (
    <DivBaixa>
      <img src={posterURL} alt="Filme" />
      <p>{title}</p>
    </DivBaixa>
  );
}

const DivBaixa = styled.div`

  display: flex;
  width: 100%;
  height: 117px;
  margin-top: 30px;
  background: #DFE6ED;
  


  img {
    width: 64px;
    height: 89px;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    margin: 10px 14px 14px 14px;
  }
  p {
    font-family: "Roboto";
    font-style: normal;
    font-size: 26px;
    line-height: 30px;
  }
`;
