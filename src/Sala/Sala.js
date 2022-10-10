import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../Filmes/style";
import {
  Conteiner,
  Main,
  DivAssentos,
  Assentos,
  Legenda,
  Selecionado,
  Disponivel,
  Indisponivel,
  Textos,
  DivInputs,
  Input,
  Reservar,
  Footer
} from "./style";

export default function Sala() {
  const { idSala } = useParams();
  const [assentos, setAssentos] = useState([]);
  const [ids, setIds] = useState([]);
  const [info, setInfo] = useState({});
  const [cpf, setCpf] = useState("");
  const [nome, setNome] = useState("");
  const [seatName, setSeatName] = useState([])
  const Navigate = useNavigate()

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSala}/seats`
    );

    promise.then((res) => {
      const { seats, movie, day, name } = res.data;
      console.log(seats);
      setInfo({ name, day, movie });
      setAssentos(seats);
    });
  }, [idSala]);

  const { name, day, movie } = info;
  const weekday = day ? day.weekday : "";
  const date = day ? day.date : "";
  const title = movie ? movie.title : "";
  const posterURL = movie ? movie.posterURL : "";

  function escolheAssento(id, isAvailable, name) {
    if (ids.includes(id)) {
      setIds([...ids.filter((el) => el !== id)]);
      return;
    } else if (!isAvailable) alert("Este assento já está ocupado!");
    if (isAvailable) {
      setIds([...ids, id]);
      setSeatName([...seatName, name])
    }
  }

  function enviarDados(event) {
    event.preventDefault();
    const promise = axios.post(
      "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",
      {
        ids: ids,
        name: nome,
        cpf: cpf,
      }
    );
    promise.then((res) => {
      alert("Foi enviado com sucesso");
      Navigate("/sucesso", { state: { title, date, name, ids, nome, cpf, seatName } });
    });
    promise.catch((err) => alert("deu ruim"));
  }

  return (
    <>
      <Header>
        <h1>CINEFLEX</h1>
      </Header>
      <Conteiner>
        <p>Selecione o(s) assento(s)</p>
      </Conteiner>
      <Main>
        <DivAssentos>
          {assentos.map((seat, i) => {
            const { id, isAvailable, name } = seat;

            return (
              <Assentos
                selecionado={ids.includes(id)}
                onClick={() => escolheAssento(id, isAvailable, name)}
                habilitado={isAvailable}
                key={id}
                disabled={!isAvailable}
              >
                <p>{name}</p>
              </Assentos>
            );
          })}
        </DivAssentos>

        <Legenda>
          <Selecionado />
          <Disponivel />
          <Indisponivel />
        </Legenda>
        <Textos>
          <p>Selecionado</p>
          <p>Disponível</p>
          <p>Indisponível</p>
        </Textos>
        <form onSubmit={enviarDados}>
          <DivInputs>
            <p>Nome do comprador</p>
            <Input
              type="text"
              onChange={(e) => setNome(e.target.value)}
              value={nome}
              placeholder="Digite seu nome..."
              required
            />
            <p>CPF do comprador:</p>
            <Input
              type="text"
              onChange={(e) => setCpf(e.target.value)}
              value={cpf}
              placeholder="Digite seu CPF..."
              required
            />
          </DivInputs>
          <Reservar type="submit">Reservar assento(s)</Reservar>
        </form>

        <Footer>
          <img src={posterURL} alt={title} />
          <h1>{title}</h1>
          <p>
            {weekday} - {name}
          </p>
        </Footer>     
      </Main>
      
    </>
  );
}
