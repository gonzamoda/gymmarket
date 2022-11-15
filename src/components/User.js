import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useContext } from "react";
import { contexto } from "./CartContext";
import { firestore } from "./firebase";
import { Link } from "react-router-dom";

const User = () => {
  const { carrito } = useContext(contexto);

  const [nombre, setNombre] = useState([]);
  const [apellido, setApellido] = useState([]);
  const [email, setEmail] = useState([]);

  const guardarNombre = (e) => {
    setNombre(e.target.value);
  };

  const guardarApellido = (e) => {
    setApellido(e.target.value);
  };

  const guardarEmail = (e) => {
    setEmail(e.target.value);
  };

  const enviarCompra = () => {
    const db = firestore;
    const collection = db.collection("ordenes");

    const compra = { carrito };

    const usuario = {
      nombre,
      apellido,
      email,
    };

    const orden = { compra, usuario };

    collection.add(orden);
  };

  return (
    <>
      <Container id="formularioUsuario">
        <FormControl
          className="input"
          onChange={guardarNombre}
          placeholder="Nombre"
        />
        <FormControl
          className="input"
          onChange={guardarApellido}
          placeholder="Apellido"
        />
        <FormControl
          className="input"
          onChange={guardarEmail}
          placeholder="e-mail"
        />
        <Button
          as={Link}
          to="/gracias"
          onClick={enviarCompra}
          className="botonFormulario"
        >
          TERMINAR COMPRA
        </Button>
      </Container>
    </>
  );
};

export default User;
