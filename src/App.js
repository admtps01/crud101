import React from 'react';
import shortid from 'shortid';

const Formulario = () => {
  const [cliente, setCliente] = React.useState('');
  const [apellido, setApellido] = React.useState('');
  const [celular, setCelular] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [modoEdicion, setModoEdicion] = React.useState(false);
  const [id, setId] = React.useState('');
  const [error, setError] = React.useState(null);
  const [lista, setLista] = React.useState([]);

  const guardarDatos = (e) => {
    e.preventDefault();

    if (!cliente.trim()) {
      console.log('esta vacio Cliente');
      return;
    }

    if (!apellido.trim()) {
      console.log('esta vacio apellido');
      return;
    }
    if (!celular.trim()) {
      console.log('esta vacio celular');
      return;
    }
    if (!email.trim()) {
      console.log('esta vacio email');
      return;
    }
    setLista([
      ...lista,
      {
        lista,
        id: shortid.generate(),
        nombraCliente: cliente,
        nombraApellido: apellido,
        nombraCelular: celular,
        nombraEmail: email,
      },
    ]);
    setCliente('');
    setApellido('');
    setCelular('');
    setEmail('');
    setError(null);
  };

  const eliminarLista = (id) => {
    const arrayFiltrado = lista.filter((item) => item.id !== id);
    setLista(arrayFiltrado);
  };
  const editar = (item) => {
    setModoEdicion(true);
    setLista(item.lista);
    setId(item.id);
  };

  const editarLista = (e) => {
    e.preventDefault();

    if (!cliente.trim()) {
      console.log('esta vacio Cliente');
      return;
    }

    if (!apellido.trim()) {
      console.log('esta vacio apellido');
      return;
    }
    if (!celular.trim()) {
      console.log('esta vacio celular');
      return;
    }
    if (!email.trim()) {
      console.log('esta vacio email');
      return;
    }

    console.log('procesando datos...' + cliente + apellido + celular + email);

    const arrayEditado = lista.map((item) =>
      item.id === id ? { id, lista } : item
    );
    setLista(arrayEditado);
    setModoEdicion(false);
    setCliente('');
    setApellido('');
    setCelular('');
    setEmail('');
    setId('');
    setError(null);
  };

  return (
    <div>
      <h2>Formulario</h2>
      <h4>Lista de clientes</h4>
      <ul>
        {lista.length === 0 ? (
          <li>sin clientes</li>
        ) : (
          lista.map((item, index) => (
            <li key={index}>
              {item.nombraCliente} - {item.nombraApellido} -{' '}
              {item.nombraCelular} - {item.nombraEmail}
              <button onClick={() => eliminarLista(item.id)}>Eliminar</button>
              <button onClick={() => editar(item)} Editar>
                Editar
              </button>
            </li>
          ))
        )}
      </ul>
      <div>
        <h4>{modoEdicion ? 'Editar informacion' : 'Agregar Tarea'}</h4>
        <form onSubmit={modoEdicion ? editarLista : guardarDatos}>
          {error ? <span className="text-danger">{error}</span> : null}
          <input
            type="text"
            placeholder="Ingrese Cliente"
            className="form-control mb-2"
            onChange={(e) => setCliente(e.target.value)}
            value={cliente}
          />
          <br />
          <input
            type="text"
            placeholder="Ingrese apellido"
            className="form-control mb-2"
            onChange={(e) => setApellido(e.target.value)}
            value={apellido}
          />
          <br />
          <input
            type="text"
            placeholder="Ingrese Celular"
            className="form-control mb-2"
            onChange={(e) => setCelular(e.target.value)}
            value={celular}
          />
          <br />
          <input
            type="text"
            placeholder="Ingrese Email"
            className="form-control mb-2"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <br />
          {modoEdicion ? (
            <button className="btn btn-warning btn-block" type="submit">
              Editar
            </button>
          ) : (
            <button className="btn btn-dark btn-block" type="submit">
              Agregar
            </button>
          )}
        </form>
      </div>
      <h6>David Julian Ariza</h6>
    </div>
  );
};
export default Formulario;
