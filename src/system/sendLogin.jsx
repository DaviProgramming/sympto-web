import React from 'react'

import { redirect } from "react-router-dom";



const sendLogin =  {
    
    data: '',

    getData(props){

        this.data = props;
    },

    checkLogin(usuario, senha){

        let setUsuario = this.data.setUsuario;
        let setLogado = this.data.setLogado;


        this.setDadosUser(usuario);

    },

    setDadosUser(usuario, id){

        let setUsuario = this.data.setUsuario;
        let setLogado = this.data.setLogado;


        setUsuario(usuario);
        setLogado(true);


       
        window.localStorage.setItem('usuario', JSON.stringify(usuario));

        window.location.href = '/home';

    },

    logoutUser(){

        let setUsuario = this.data.setUsuario;
        let setLogado = this.data.setLogado;

        setUsuario('');
        setLogado('false');

        window.localStorage.removeItem('usuario');

        window.location.href = '/';

        
    }



}

export default sendLogin