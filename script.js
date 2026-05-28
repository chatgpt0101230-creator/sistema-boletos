import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDs8OT9c1hyvo2HurbIOy7uV0LNeBPNPbc",
  authDomain: "sistema-boletos-ce01a.firebaseapp.com",
  projectId: "sistema-boletos-ce01a",
  storageBucket: "sistema-boletos-ce01a.firebasestorage.app",
  messagingSenderId: "759177791376",
  appId: "1:759177791376:web:e3756a25f55527522e5515"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const email = document.getElementById("email");
const senha = document.getElementById("senha");

const btnLogin = document.getElementById("btnLogin");
const btnCadastro = document.getElementById("btnCadastro");

const mensagem = document.getElementById("mensagem");

btnCadastro.addEventListener("click", async () => {

  try {

    await createUserWithEmailAndPassword(
      auth,
      email.value,
      senha.value
    );

    mensagem.innerHTML = "Conta criada com sucesso";

  } catch (error) {

    mensagem.innerHTML = error.message;

  }

});

btnLogin.addEventListener("click", async () => {

  try {

    await signInWithEmailAndPassword(
      auth,
      email.value,
      senha.value
    );

    mensagem.innerHTML = "Login realizado";

  } catch (error) {

    mensagem.innerHTML = error.message;

  }

});