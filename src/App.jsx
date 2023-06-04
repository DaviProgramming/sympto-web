import React, { useState } from 'react';

import Home from './router/Home'
import Login from './router/Login'
import Settings from './router/Settings'
import SignUp from './router/SignUp'

import {createBrowserRouter, RouterProvider} from 'react-router-dom';

function App() {

const [logado, setLogado] = useState("");
const [usuario, setUsuario] = useState("");
const [id, setId] = useState(0);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home logado={logado} setLogado={setLogado} usuario={usuario} setUsuario={setUsuario} id={id} setId={setId} />

  },
  {
    path: "/login",
    element: <Login  logado={logado} setLogado={setLogado} usuario={usuario} setUsuario={setUsuario} id={id} setId={setId} />
  },
  {
    path: "/configuracoes",
    element: <Settings  logado={logado} setLogado={setLogado} usuario={usuario} setUsuario={setUsuario} id={id} setId={setId} />
  },
  {
    path: "/cadastro",
    element: <SignUp  logado={logado} setLogado={setLogado} usuario={usuario} setUsuario={setUsuario} id={id} setId={setId} />
  },
  
])
 

  return (
    <RouterProvider router={router} />
  )
}

export default App
