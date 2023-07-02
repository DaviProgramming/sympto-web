import React, { useState, useEffect } from 'react';

import Home from './router/Home'
import Login from './router/Login'
import Settings from './router/Settings'
import SignUp from './router/SignUp'
import UserHome from './router/UserHome'
import sendLogin from './system/sendLogin';
import Suporte from './router/Suporte';
import Notificacoes from './router/Notificacoes'

import Navbar from './components/Navbar';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {


  const [logado, setLogado] = useState("false");
  const [usuario, setUsuario] = useState("");
  const [id, setId] = useState(0);

  useEffect(() => {

    const data = window.localStorage.getItem('usuario');

    if (data != null) {

      let getData = JSON.parse(data);

      if (getData != null && getData != '' && getData != ' ') {

        console.log(JSON.parse(data));
        setUsuario(JSON.parse(data));
        setLogado(true);


      } else {

        setUsuario('');
        setLogado("false");

      }
  

    } else {
      setUsuario('');
      setLogado("false");
    }


  }, [usuario])


  let propsLogin = {
    logado: logado,
    setLogado: setLogado,
    usuario: usuario,
    setUsuario: setUsuario,
    id: id,
    setId: setId
  }

  sendLogin.getData(propsLogin);




  const router = createBrowserRouter([

    {
      path: "/",
      element: <Home logado={logado} setLogado={setLogado} usuario={usuario} setUsuario={setUsuario} id={id} setId={setId} />

    },
    {
      path: "/home",
      element: <UserHome logado={logado} setLogado={setLogado} usuario={usuario} setUsuario={setUsuario} id={id} setId={setId} />
    },
    {
      path: "/login",
      element: <Login logado={logado} setLogado={setLogado} usuario={usuario} setUsuario={setUsuario} id={id} setId={setId} />
    },
    {
      path: "/configuracoes",
      element: <Settings logado={logado} setLogado={setLogado} usuario={usuario} setUsuario={setUsuario} id={id} setId={setId} />
    },
    {
      path: "/suporte",
      element: <Suporte logado={logado} setLogado={setLogado} usuario={usuario} setUsuario={setUsuario} id={id} setId={setId} />

    },
    {
      path: "notificacoes",
      element: <Notificacoes logado={logado} setLogado={setLogado} usuario={usuario} setUsuario={setUsuario} id={id} setId={setId} />

    },
    {
      path: "/cadastro",
      element: <SignUp logado={logado} setLogado={setLogado} usuario={usuario} setUsuario={setUsuario} id={id} setId={setId} />
    },

    {
      path: "*",
      element: <Home logado={logado} setLogado={setLogado} usuario={usuario} setUsuario={setUsuario} id={id} setId={setId} />
    }

  ])


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
