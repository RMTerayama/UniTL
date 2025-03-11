import React from "react";
import "./styles.css";


function altern_visibility(){
    const password = document.getElementById('inputPassword');
    const toggleIcon = document.getElementById('eye');

    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);

    toggleIcon.classList.toggle('bi-eye');
    toggleIcon.classList.toggle('bi-eye-slash');
}

export default function Formulario() {
    return <>

        <div className="form">
            <h1>Acessar</h1>
            <form>
                <div class="mb-3">
                    <label for="inputUser" class="form-label">Usuário</label>
                    <input type="email" class="form-control" id="inputUser" aria-describedby="emailHelp" placeholder="Usuario.exemplo" />

                </div>
                <div class="mb-3">
                    <label for="inputPassword" class="form-label">Senha</label>
                    <div className="input-group">
                        <input type="password" class="form-control" id="inputPassword" placeholder="Insira a sua senha" />
                        <span className="password-toggle" id="togglePassword" onClick={altern_visibility}><i className="bi bi-eye" id="eye"></i></span>
                    </div>
                </div>
                <button class="btn btn-primary w-100 botao">Criar Conta</button>
                <button type="submit" class="btn btn-primary w-100 botao">Entrar</button>
            </form>

        </div>


    </>
}