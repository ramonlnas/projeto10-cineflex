import { Link, useLocation } from "react-router-dom";
import { Header } from "../Filmes/style.js";

import { Main, Title, Div, Home } from "./style.js";

export default function Sucesso() {
  const navigate = useLocation();
  const { state } = navigate;
  const { title, date, name, nome, cpf, seatName } = state;
  console.log(seatName)

  return (
    <>

      <Header>
        <h1>CINEFLEX</h1>
      </Header>

      <Title>
        <h1>Pedido feito com sucesso!</h1>
      </Title>
      <Main>
        <Div>
          <h1>Filme e sessão</h1>
          <p>{title}</p>
          <p>
            {date}-{name}
          </p>
        </Div>
        <Div>
          <h1>Ingressos</h1>
          
          {seatName.map((id) => {
            return <p key={id}>Assento: {id}</p>;
          })}
        </Div>
        <Div>
          <h1>Comprador</h1>
          <p>Nome:{nome}</p>
          <p>CPF:{cpf}</p>
        </Div>
        <Link to={`/`}>
          <Home>Voltar para Home</Home>
        </Link>
      </Main>
    </>
  );
}
