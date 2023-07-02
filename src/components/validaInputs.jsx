import React from 'react'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import Login from '../system/sendLogin';
import Cadastrar from '../system/Cadastrar';

import { redirect } from "react-router-dom";
import sendLogin from '../system/sendLogin';


const validaInputs = {

    error: 0,
    usuario: '',
    senha: '',
    
    checkError(idForm) {

        if (this.error > 0) {


            const swalError = withReactContent(Swal);

            swalError.fire({
                title: <strong>Preencha corretamente todos os campos!</strong>,
                html: '',
                icon: 'error'
            })

        }else{

            if(idForm == 'form-login'){

                sendLogin.checkLogin(this.usuario, this.senha);


            } else {
                window.location.href = '/login';
            }
            


        }
    },

    validaForm(idForm) {

        let id = idForm;

        let form = document.querySelector('#' + id);

        this.error = 0;

        if (id == 'form-login') {

            let loginUser = form.querySelector("input[name='usuarioLogin']");
            let passwordUser = form.querySelector('input[name="senhaLogin"]');

            this.validaInput(loginUser, 'loginUser');
            this.validaInput(passwordUser, 'passwordUser');

            this.usuario = loginUser.value;
            this.senha = passwordUser.value;



            this.checkError(id);





        } else if (id == 'form-cadastro') {

            let nomeCadastro = form.querySelector('input[name="nomeCadastro"]');
            let cpf = form.querySelector('input[name="cpfCadastro"]');
            let email = form.querySelector('input[name="emailCadastro"]');
            let senha = form.querySelector('input[name="senhaCadastro"]');

            this.validaInput(nomeCadastro, 'nomeCadastro');
            this.validaInput(cpf, 'cpf');
            this.validaInput(email, 'emailCadastro');
            this.validaInput(senha, 'senhaCadastro');


            this.checkError(id);



        }


    },

    validaInput(input, name) {

        let label = input.parentNode;


        if (name == 'cpf') {


            let inputValue = input.value;

            if(this.validaCpf(inputValue)){


                console.log(this.validaCpf(input.value));

                if(label.classList.contains('error')){
                    label.classList.remove('error');
                }

            } else {

                if (!label.classList.contains('error')) {
                    label.classList.add('error');
                }

            }

        } else {

            if (input.value.length < 2) {


                if (!label.classList.contains('error')) {

                    label.classList.add('error');

                }

                this.error++;



            } else {

                if (label.classList.contains('error')) {
                    label.classList.remove('error');
                }

            }

        }


    },

    removeSpan(input) {
        let value = input.value;

        let label = input.parentNode;
        let span = label.querySelector('span');


        if (value.length >= 1) {

            span.style.display = 'none';

        } else {
            span.style.display = 'flex';
        }
    },

    validaCpf(cpf) {

        function TestaCPF(strCPF) {
            var Soma;
            var Resto;
            Soma = 0;
            if (strCPF == "00000000000") return false;

            for (let i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
            Resto = (Soma * 10) % 11;

            if ((Resto == 10) || (Resto == 11)) Resto = 0;
            if (Resto != parseInt(strCPF.substring(9, 10))) return false;

            Soma = 0;
            for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
            Resto = (Soma * 10) % 11;

            if ((Resto == 10) || (Resto == 11)) Resto = 0;
            if (Resto != parseInt(strCPF.substring(10, 11))) return false;
            return true;
        }

        return TestaCPF(cpf);



    },

    changeInputType(idForm, action){

        let id = idForm;

        let form = document.querySelector('#' + id);

        if(action == 'hide'){

            let eyeHide = form.querySelector('#passwordHide');

            eyeHide.style.display = 'flex';

            let eyeShow = form.querySelector('#passwordShow');
            eyeShow.style.display = 'none';

            if(id == 'form-cadastro'){

                let input = form.querySelector('input[name="senhaCadastro"]');
                input.type = 'password';

            } else if(id == 'form-login'){

                let input = form.querySelector('input[name="senhaLogin"]');
                input.type = 'password';

            }

        }else if(action == 'show') {

            let eyeHide = form.querySelector('#passwordHide');

            eyeHide.style.display = 'none';

            let eyeShow = form.querySelector('#passwordShow');
            eyeShow.style.display = 'flex';

            if(id == 'form-cadastro'){

                let input = form.querySelector('input[name="senhaCadastro"]');
                input.type = 'text';

            } else if(id == 'form-login'){

                let input = form.querySelector('input[name="senhaLogin"]');
                input.type = 'text';

            }

        }



    },

    clickRemoveSpan(input){

        let parent = input.parentNode;

        let span = parent.querySelector('span');

        span.style.display = 'none';

    },

    outInput(input){

        let parent = input.parentNode;

        let span = parent.querySelector('span');

        if(input.value.length <= 0){

            span.style.display = 'flex';

        } else{
            span.style.display = 'none';
        }

    },

}



export default validaInputs